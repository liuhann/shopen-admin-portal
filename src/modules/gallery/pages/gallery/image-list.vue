<template>
  <div class="image-list-wrapper">
    <div v-for="image in images" :key="image._id" class="image-box">
      <div class="thumbnail">
        <img :src="host + image.key + '?x-oss-process=image/resize,m_fill,h_150,w_200'">
      </div>
      <div class="image-name">
        <div v-if="!image.editing" class="text">{{image.name}}</div>
        <el-input v-if="image.editing" v-model="image.name" size="mini"></el-input>
      </div>
      <div class="tag-wrapper">
        <div v-if="!image.editing">
          <el-tag
            :key="tag"
            size="mini"
            v-for="tag in image.tags"
            :disable-transitions="true">
            {{tag}}
          </el-tag>
          <div class="no-tag" v-if="image.tags.length===0">未设置标签</div>
        </div>
        <el-select
          v-if="image.editing"
          v-model="image.tags"
          multiple
          filterable
          allow-create
          size="mini"
          default-first-option
          placeholder="请设置标签">
          <el-option
            v-for="item in tags"
            :key="item.key"
            :label="item.key"
            :value="item.key">
          </el-option>
        </el-select>
      </div>
      <div class="icons">
        <el-button v-if="!image.editing" size="mini" @click="editImage(image)" type="text" icon="el-icon-edit-outline">编辑</el-button>
        <el-button v-if="image.editing" size="mini" @click="deleteImage(image)" type="text" icon="el-icon-delete">删除</el-button>
        <el-button v-if="image.editing" size="mini" @click="cancelEditImage(image)" type="text" icon="el-icon-close">取消</el-button>
        <el-button v-if="image.editing" size="mini" @click="finishEditImage(image)" type="text" icon="el-icon-check">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import RESTFullDAO from 'rest-dao'
import DictonaryDAO from './dict-dao'

const IMAGE_HOST = 'https://shopen-test.oss-cn-beijing.aliyuncs.com/'

export default {
  name: 'image-list',
  components: {
  },
  props: {
    tag: {
      type: String
    },
    name: {
      type: String
    },
    tags: {
      type: Array
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
    this.dictdao = new DictonaryDAO(this.ctx.servers.dictionary)
    this.listMoreImages()
  },

  watch: {
    tag: async function () {
      await this.reloadFromStart()
    }
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
      if (this.name) {
        param.key = 'name'
        param.value = this.name
      } else if (this.tag) {
        param.key = 'tags'
        param.value = this.tag
      }
      const response = await this.imagedao.list(param)
      this.total = response.total
      for (let image of response.list) {
        image.checked = false
        image.editing = false
        image.tags = image.tags || []
        this.images.push(image)
      }
      if (this.total < this.currentPage * this.count) {
        this.reachBottom = true
      }
    },

    editImage (image) {
      image.editing = true
    },

    cancelEditImage (image) {
      image.editing = false
    },

    async finishEditImage (image) {
      if (image.tags.length) {
        for (let tag of image.tags) {
          if (this.tags.indexOf(tag) === -1) {
            await this.dictdao.create('image-tags', tag)
          }
        }
      }
      await this.imagedao.patch(image._id, {
        name: image.name,
        tags: image.tags
      })
      image.editing = false
    },

    async deleteImage (image) {
      await this.imagedao.delete(image._id)
      await this.reloadFromStart()
    }
  }

}
</script>

<style lang="less">
.image-list-wrapper {
  display: flex;
  flex-wrap: wrap;
  .image-box {
    width: 200px;
    min-height: 200px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    margin-bottom: 12px;
    margin-right: 12px;
    .image-name {
      padding: 0px 5px;
      line-height: 30px;
      .text {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .tag-wrapper {
      padding: 5px;
      height: 22px;
      .no-tag {
        font-size: 12px;
        color: #ccc;
      }
      .el-select {
      }
    }
    .icons {
      display: flex;
      padding: 0 5px;
      flex-direction: row-reverse;
    }
  }
}
</style>
