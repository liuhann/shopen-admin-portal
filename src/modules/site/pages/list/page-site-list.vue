<style lang="less">
@import '../../style/common';
.site-list {
  .header {
  }
}
</style>
<template>
<div class="site-layout">
  <div class="header">
    <div class="header-actions">
      <el-button type="primary" size="medium" plain icon="el-icon-edit" @click="createSite">创建站点</el-button>
    </div>
  </div>
  <div class="content">

  </div>
</div>
</template>

<script>
import RESTfulDAO from 'rest-dao'
import {Button} from 'element-ui'

export default {
  name: 'site-list',
  components: {
    'el-button': Button
  },
  created () {
    this.sitedao = new RESTfulDAO('/api/v1/site', this.ctx)
  },
  methods: {
    createSite () {
      this.$router.replace('/site/create')
    }
  }
}
</script>
