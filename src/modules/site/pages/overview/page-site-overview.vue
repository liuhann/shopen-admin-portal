<template>
<div class="page-site-overview overview">
  <header>
    <h3>
      <span>自定义页面</span>
      <div class="header-actions">
        <el-button type="text" size="medium" @click="createPage">创建</el-button>
      </div>
    </h3>
  </header>
  <section class="pages">
    <div class="free-page" v-for="(page, index) in freePages" :key="index">
      <div class="snapshot">
        <div class="image"></div>
        <div class="text">
          <span class="title">{{page.name}}</span>
          <div class="desc"></div>
        </div>
      </div>
      <div class="opers">
        <el-button type="text" @click="openPageBuilder(page._id)" size="mini">编辑</el-button>
        <el-button type="text" size="mini">统计</el-button>
        <el-button type="text" size="mini">删除</el-button>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import RESTfulDAO from 'rest-dao'
import {Button} from 'element-ui'
import {MenuGroup} from '../../imports'
export default {
  name: 'page-site-overview',
  components: {
    'menu-group': MenuGroup,
    'el-button': Button
  },
  data() {
    return {
      freePages: [],
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
      const frees = await this.pagedao.list({
        _site_id: this.$route.params.site
      })
      this.freePages = frees.list
    },

    openPageBuilder(pageId) {
      this.$router.push(`/page/builder/${pageId}`)
    },

    createPage() {
      this.$router.push(`/page/edit/${this.$route.params.site}/`)
    }
  }
}
</script>

<style lang="less">
  .page-site-overview {
    section.pages {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      .free-page {
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        margin-bottom: 15px;
        @media (min-width: 850px) {
          width: 32%;
        }
        @media (max-width: 850px) {
          width: 48%;
        }
        .opers {
          border-top: 1px solid #dbdbdb;
          display: flex;
          justify-content: space-around;
          .el-button--text {
            flex: 1;
            padding: 12px 5px;
            font-size: 14px;
          }
        }
      }
    }
  }

</style>
