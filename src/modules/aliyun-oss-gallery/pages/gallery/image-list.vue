<template>
  <div class="image-list-wrapper">
    <div v-for="image in images" :key="image._id" class="image-box">
      <div class="thumbnail">
        <img :src="host + image.key + '?x-oss-process=image/resize,m_fill,h_75,w_100'">
      </div>
      <div class="name">{{image.name}}</div>
    </div>
  </div>
</template>

<script>
import RESTFullDAO from './rest-dao'

const IMAGE_HOST = 'https://shopen-test.oss-cn-beijing.aliyuncs.com/'

export default {
  name: 'image-list',
  props: {
    tag: {
      type: String
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      host: IMAGE_HOST,
      images: [],
      reachBottom: false,
      currentPage: 1,
      count: 10,
      total: 10000000
    }
  },
  created () {
    this.imagedao = new RESTFullDAO('/api/v1/image', this.ctx.servers.image)
    this.listMoreImages()
  },

  methods: {
    async reloadFromStart () {
      this.reachBottom = false
      this.currentPage = 1
      this.images = []
      await this.listMoreImages()
    },

    async listMoreImages () {
      const param = {
        page: this.currentPage,
        count: this.count,
        sort: '_id',
        order: -1
      }
      if (this.searchFileName) {
        param.key = 'name'
        param.value = this.searchFileName
      } else if (this.filteredTag) {
        param.key = 'tag'
        param.value = this.filteredTag
      }
      const response = await this.imagedao.list(param)
      this.total = response.total
      for (let image of response.list) {
        this.images.push(image)
      }
      if (this.total < this.currentPage * this.count) {
        this.reachBottom = true
      }
    }
  }

}
</script>

<style lang="less">
.image-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .image-box {
    width: 120px;
    height: 120px;
    display: inline-block;
  }
}
</style>
