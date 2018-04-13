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
          border: 1px solid red;
        }
      }
    }
    .packages {
      display: flex;
      flex-wrap: wrap;
      .package {
        display: flex;
        text-align: center;
        width: 100px;
        flex-direction: column;
        border: 1px solid #eee;
        height: 100px;
        margin: 20px;
        i {
          font-size: 30px;
          margin: 20px;
          margin-bottom: 5px;
          color: #273345;
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
      <el-button type="text" size="medium" icon="el-icon-check" @click="returnList">保存</el-button>
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
          <div class="package" v-for="module in packages" :key="module.name" @click="togglePackage(module)" :class="module.selected?'checked': ''">
            <i :class="module.icon"></i>
            <div class="name">{{module.name}}</div>
          </div>
        </span>
      </label>
    </section>
  </div>
</div>
</template>

<script>
import {Button} from 'element-ui'
import MobileShellNova from './mobile-shell-nova'

export default {
  name: 'page-site-create',
  components: {
    MobileShellNova,
    'el-button': Button,
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
        selected: false,
        id: 'store',
        name: '商店',
        icon: 'el-icon-goods'
      }, {
        selected: false,
        id: 'story',
        name: '故事',
        icon: 'el-icon-service'
      }, {
        selected: false,
        name: '视频',
        icon: 'el-icon-picture'
      }, {
        selected: false,
        name: '微信公号',
        icon: 'el-icon-view'
      }, {
        selected: false,
        id: 'activity',
        name: '活动',
        icon: 'el-icon-date'
      }]
    }
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
    }
  }
}
</script>
