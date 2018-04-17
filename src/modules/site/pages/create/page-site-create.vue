<style lang="less">
  @import '../../style/common';
  .site-create {
    .themes {
      display: flex;
      justify-content: space-around;
      height: 200px;
      align-items: center;

      .mobile-shell-nova-outer {
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
        &.selected {
          border: 1px solid rgb(255, 132, 1);
        }
      }
    }
    .packages {
      .multi-check {
        display: flex;
        flex-wrap: wrap;
      }
      .package {
        display: flex;
        text-align: center;
        width: 100px;
        flex-direction: column;
        border: 1px solid #eee;
        height: 100px;
        margin: 20px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        i {
          font-size: 30px;
          margin: 20px;
          margin-bottom: 5px;
          color: #7f8185;
        }
        &.selected {
          border: 1px solid rgb(255, 132, 1);
        }
      }
    }
  }
</style>

<template>
<div class="site-layout site-create">
  <div class="header">
    <div class="header-actions">
      <el-button type="text" size="medium" icon="el-icon-back" @click="returnList">返回列表</el-button>
      <el-button type="text" size="medium" icon="el-icon-check" @click="saveSite">保存</el-button>
    </div>
  </div>
  <div class="content">
    <section class="form">
      <label>
          <span class="key">名称</span>
          <span class="val">
            <input type="text" v-model="site.name" placeholder="站点名称">
          </span>
      </label>
      <label>
        <span class="key">主题</span>
        <span class="val themes">
          <mobile-shell-nova :checked="item.id===site.theme" @click.native="chooseTheme(item)" v-for="(item, index) in themes" :key="index" :cover="getCoverImage(item)"></mobile-shell-nova>
        </span>
      </label>
      <label>
        <span class="key">功能模块</span>
        <span class="val packages">
          <multi-check v-model="site.packages" :items="packages" :item-key="'id'" :item-class="'package'">
            <template slot-scope="{ item }">
              <i :class="item.icon"></i>
              <div class="name">{{item.name}}</div>
            </template>
          </multi-check>
        </span>
      </label>
    </section>
  </div>
</div>
</template>

<script>
import {Button} from 'element-ui'
import RESTFullDAO from 'rest-dao'
import MobileShellNova from './mobile-shell-nova'
import {MultiCheck} from '../../imports'

export default {
  name: 'page-site-create',
  components: {
    MobileShellNova,
    'el-button': Button,
    'multi-check': MultiCheck,
    'mobile-shell-nova': MobileShellNova
  },
  // http://localhost:3000/themes/bonfire/previews/cover.png
  data () {
    return {
      site: {
        name: '',
        theme: 'bonfire',
        packages: []
      },
      themes: [{
        id: 'bonfire'
      }, {
        id: 'dasha'
      }, {
        id: 'indochino'
      }, {
        id: 'bonfire'
      }],
      packages: [{
        id: 'store',
        name: '商店',
        icon: 'el-icon-goods'
      }, {
        id: 'lucky-draw',
        name: '抽奖',
        icon: 'el-icon-picture'
      }, {
        id: 'child-story',
        name: '故事',
        icon: 'el-icon-service'
      }, {
        id: 'video',
        name: '视频',
        icon: 'el-icon-picture'
      }, {
        id: '',
        name: '微信公号',
        icon: 'el-icon-view'
      }, {
        id: 'activity',
        name: '活动',
        icon: 'el-icon-date'
      }]
    }
  },

  created () {
    this.sitedao = new RESTFullDAO(`/api/v1/site`, this.ctx.servers.shopen)
    this.pagedao = new RESTFullDAO(`/api/v1/page`, this.ctx.servers.shopen)
  },

  methods: {
    getCoverImage (theme) {
      return this.ctx.servers.image.options.baseURL + '/themes/' + theme.id + '/previews/cover.png'
    },

    chooseTheme (theme) {
      this.site.theme = theme.id
    },

    togglePackage (module) {
      module.selected = !module.selected
    },

    returnList () {
      this.$router.replace('/sites')
    },

    async saveSite () {
      const response = await this.sitedao.create(this.site)
      await this.pagedao.create({
        path: '/',
        name: '首页',
        _site_id: response.object._id
      })
      this.$router.replace('/sites')
    }
  }
}
</script>
