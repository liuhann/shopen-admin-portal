<template>
<div class="site-frames">
  <div class="left-nav">
    <menu-group :config="navPageConfig">
      <template slot="title-append">
        <el-button size="mini" @click="createPage" type="text" >创建</el-button>
      </template>
    </menu-group>
  </div>
  <div class="center-content">

  </div>
</div>
</template>

<script>
import RESTfulDAO from 'rest-dao'
import {Button} from 'element-ui'
import {MenuGroup} from '../../imports'
export default {
  name: 'site-frame',
  components: {
    'menu-group': MenuGroup,
    'el-button': Button
  },
  data() {
    return {
      pages: [],
      navPageConfig: {
        title: '页面'
      }
    }
  },
  created() {
    this.pagedao = new RESTfulDAO(`/api/v1/page`, this.ctx.servers.shopen)
    this.getSitePages()
  },

  methods: {
    async getSitePages() {
      this.pagedao.list({
        _site_id: this.$route.params.site
      })
    },
    createPage() {
      this.$router.push(`/page/edit/${this.$route.params.site}/`)
    }
  }
}
</script>

<style lang="less">

.site-frames {
  display: flex;
  width: 100%;
  .left-nav {
    width:180px;
    background-color: #fff;
  }
  .center-content {
    flex: 1;
  }
}

</style>
