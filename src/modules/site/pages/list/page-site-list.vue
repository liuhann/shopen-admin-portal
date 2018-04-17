<style lang="less">
@import '../../style/common';
.site-list {
  .header {
  }
  .content {
    .site {
      margin-bottom: 40px;
      width: 250px;
      height: 260px;
      background: #fff;
      border: 1px solid rgba(39,54,78,.1);
      text-align: center;
      position: relative;
      transition: all .2s ease-in-out;
      box-shadow: 0 1px 2px 0 hsla(213,6%,61%,.15);
    }
  }
}
</style>
<template>
<div class="site-list site-layout">
  <div class="header">
    <div class="header-actions">
      <el-button type="primary" size="medium" plain icon="el-icon-edit" @click="createSite">创建站点</el-button>
    </div>
  </div>
  <div class="content">
    <div class="site" v-for="(site, index) in sites" :key="index" @click="enterSite(site)">
      <div class="icon"></div>
      <div class="title">{{site.name}}</div>
      <div class="visits">10+</div>
      <div class="icons">
        <i class="el-icon-setting"></i>
        <i class="el-icon-view"></i>
        <i class="el-icon-delete"></i>
      </div>
    </div>
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
  data () {
    return {
      sites: []
    }
  },

  created () {
    this.sitedao = new RESTfulDAO('/api/v1/site', this.ctx.servers.shopen)
    this.listSites()
  },

  methods: {
    createSite () {
      this.$router.replace('/site/create')
    },
    async listSites () {
      this.sites = (await this.sitedao.list()).list
    },
    enterSite (site) {
      this.$router.replace(`/site/frame/${site._id}`)
    }
  }
}
</script>
