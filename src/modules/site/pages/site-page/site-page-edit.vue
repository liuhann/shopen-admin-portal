<template>
<div class="form-edit">
  <div class="form-title">
    <h3>新增页面</h3>
  </div>
  <div class="item">
    <label>页面名称</label>
    <div class="item-content">
      <el-input v-model="name"></el-input>
    </div>
  </div>
  <div class="item">
    <label>页面地址</label>
    <div class="item-content">
      <el-input v-model="url"></el-input>
    </div>
  </div>
  <div class="item">
    <label>模板</label>
    <div class="item-content">
      <el-select v-model="template"></el-select>
    </div>
  </div>
  <div class="submit">
    <el-button type="primary" round @click="savePage">保存</el-button>
    <el-button type="text" @click="returnSite">取消</el-button>
  </div>
</div>
</template>
<script>
import shortid from 'shortid'
import RESTFullDAO from 'rest-dao'

export default {
  name: 'site-page-edit',
  components: {
  },
  data () {
    return {
      name: '',
      url: shortid.generate(),
      template: '',
    }
  },

  created() {
    this.pagedao = new RESTFullDAO(`/api/v1/page`, this.ctx.servers.shopen)
  },

  methods: {
    async savePage() {
      if (this.name.trim() === '') {
        this.$message({
          showClose: true,
          message: '请输入页面名称',
          type: 'error'
        })
        return
      }
      await this.pagedao.create({
        _site_id: this.$route.params.site,
        name: this.name,
        url: this.url,
        template: this.template
      })
      this.returnSite()
    },

    async returnSite() {
      this.$router.replace(`/site/show/${this.$route.params.site}`)
    }
  }
}
</script>

<style scoped>

</style>
