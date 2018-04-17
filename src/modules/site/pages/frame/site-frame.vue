<template>
<div class="site-frames">
  <div class="navs">
    <div class="pages">
      <h3 class="title">站点页面</h3>
      <ul>

      </ul>
      <h3 class="title">模块页面</h3>
    </div>
  </div>
</div>
</template>

<script>
import RESTfulDAO from 'rest-dao'
export default {
  name: 'site-frame',
  data() {
    return {
      pages: []
    }
  },
  created() {
    this.pagedao = new RESTfulDAO(`/api/v1/page`, this.ctx.servers.shopen)
    this.getSitePages()
  },

  methods: {
    async getSitePages() {
      this.pagedao.list({
        _site_id: this.$route.params.id
      })
    }
  }
}
</script>

<style lang="less">

</style>
