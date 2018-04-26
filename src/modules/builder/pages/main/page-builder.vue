<style lang="less">
.site-builder {
  @media (min-width: 850px) {
    margin: 10px auto;
    width: 828px;
  }
  @media (max-width: 850px) {
    width: 100%;
    margin: 8px;
  }
  .screen-viewport {
    background: #fff;
    margin: 0 auto;
    border: 1px solid #eee;
    position: relative;
    @media (min-width: 850px) {
      width: 375px;
      min-height: 720px;
    }
    @media (max-width: 850px) {
      width: 100%;
      min-height: 720px;
    }
    .btn-add {
      margin: 20px;
      text-align: center;
      border: 1px dashed #c0c4cc;
      padding: 16px;
      font-size: 16px;
      cursor: pointer;
      color: #606266;
    }
  }

  .section-list {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: #fff;
    transition: transform .3s ease-in-out;
    @media (min-width: 850px) {
      width: 360px;
      transform: translateX(-360px);
      &.open {
        transform: translateX(0);
      }
    }
    @media (max-width: 850px) {
      width: 90%;
      transform: translateX(-100%);
      &.open {
        transform: translateX(0);
      }
    }

    .section-entry {
      border-bottom: 1px solid #eee;
      cursor: pointer;
      display: flex;
      padding: 10px;
      .name {
        line-height: 30px;
        flex: 1;
      }
    }
  }
}
.screen-content {
  width: 100%;
  flex: 1;
}
</style>
<template>
<div class="site-builder">

  <div class="screen-viewport">
    <link v-for="style in themeStyles" :key="style" :href="imageBaseUrl + '/themes/' + theme + '/styles/' + style" rel="stylesheet">
    <screen-preview ref="viewScreen"></screen-preview>
    <div class="btn-add" @click="onAddSectionClick">增加页面元素</div>
  </div>

  <div class="section-list" :class="showSectionTemplateList? 'open': ''">
    <div class="section-entry" v-for="(section, key) in sections" :key="key">
      <span class="name">{{section.title}}</span>
      <el-button class="btn-add" type="primary" size="mini" @click="addSection(section)">添加</el-button>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import builder from '../../models/builder'
import ScreenPreview from './components/screen-preview'
import ElButton from "element-ui/packages/button/src/button";

export default {
  name: 'page-builder',
  components: {
    ElButton,
    'screen-preview': ScreenPreview,
  },
  created() {
    this.loadThemeSections(this.theme)
  },
  data() {
    return {
      imageBaseUrl: this.ctx.servers.theme.options.baseURL,
      theme: 'bonfire',
      showSectionTemplateList: false,
      showEditSection: false,
      sections: [],
      themeStyles: [],
    }
  },
  computed: {
  },
  methods: {
    async onAddSectionClick() {
      this.showSectionTemplateList = true
    },
    async loadThemeSections(theme) {
      const themePackage = await builder.getThemeSections({theme}, this.ctx)
      for (let section of themePackage.sections) {
        section.tmpl = await builder.loadSectionTemplate({theme, section}, this.ctx)
        Vue.component('so-' + section.name, {
          props: {
            data: {
              type: Object
            }
          },
          template: section.tmpl
        })
        this.sections.push(section)
      }
      this.themeStyles = themePackage.styles
    },
    async savePage() {
      await builder.savePage({
        page: 'test',
        type: 'index',
        sections: this.$refs.viewScreen.sections,
      }, this.ctx)
    },
    async addSection(section) {
      this.showSectionTemplateList = false
      this.showEditSection = true
    }
  },
}
</script>
