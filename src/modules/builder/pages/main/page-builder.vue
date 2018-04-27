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

  .btn-add {
    @media (min-width: 850px) {
      margin-top: 4px;
      margin-right: 166px;
      float: right;
    }
    @media (max-width: 850px) {
      position: absolute;
      bottom: 30px;
      right: 30px;
      font-size: 20px;
      z-index: 99;
    }
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
  }

  .section-list, .edit-section {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: #fff;
    z-index: 101;
    @media (min-width: 850px) {
      width: 360px;
    }
    @media (max-width: 850px) {
      width: 90%;
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
  <el-button class="btn-add" type="primary" icon="el-icon-plus" circle @click="onAddSectionClick"></el-button>
  <div class="screen-viewport">
    <link v-for="style in themeStyles" :key="style" :href="imageBaseUrl + '/themes/' + theme + '/styles/' + style" rel="stylesheet">
    <screen-preview ref="viewScreen" :sections="pageSections" @upper-section="moveUp" @edit-section="editSection"></screen-preview>
  </div>

  <transition name="slide-left">
    <div class="section-list" v-if="showSectionTemplateList">
      <div class="section-entry" v-for="(section, key) in sectionTemplates" :key="key">
        <span class="name">{{section.title}}</span>
        <el-button type="primary" size="mini" @click="addSection(section)">添加</el-button>
      </div>
    </div>
  </transition>
  <transition name="slide-left">
    <edit-section :section="currentSection" v-if="showEditSection" @close="closeEdit" @remove="removeCurrentSection"></edit-section>
  </transition>
</div>
</template>
<script>
import Vue from 'vue'
import builder from '../../models/builder'
import ScreenPreview from './components/screen-preview'
import ElButton from 'element-ui/packages/button/src/button'
import EditSection from './components/edit-section'

export default {
  name: 'page-builder',
  components: {
    ElButton,
    'edit-section': EditSection,
    'screen-preview': ScreenPreview,
  },
  created() {
    this.loadThemeSections(this.theme)
  },
  data() {
    return {
      imageBaseUrl: this.ctx.servers.theme.options.baseURL,
      theme: 'bonfire',
      // add section side bar
      showSectionTemplateList: false,
      // edit section side bar
      showEditSection: false,
      currentSection: {},
      // section templates in theme
      sectionTemplates: [],
      // the sections current page using
      pageSections: [],
      themeStyles: [],
      // section seq
      seq: 1,
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
        this.sectionTemplates.push(section)
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
    async addSection(sectionTemplate) {
      this.showSectionTemplateList = false
      const section = this.cloneObject(sectionTemplate)
      section.hover = false
      section.id = this.seq++
      delete section.tmpl
      this.pageSections.push(section)
      this.currentSection = section
      this.showEditSection = true
    },

    moveUp(section) {
      if (this.pageSections[0] === section) {
        return
      }
      for (let i = 0; i < this.pageSections.length; i++) {
        if (this.pageSections[i] === section) {
          const upper = this.pageSections[i - 1]
          this.$set(this.pageSections, i - 1, section)
          this.$set(this.pageSections, i, upper)
          break
        }
      }
    },
    moveDown(section) {

    },
    editSection(section) {
      this.currentSection = section
      this.showEditSection = true
    },

    cloneObject(object) {
      return JSON.parse(JSON.stringify(object))
    },

    closeEdit() {
      this.showEditSection = false
    },
    removeCurrentSection() {
      this.showEditSection = false
      for (let i = 0; i < this.pageSections.length; i++) {
        if (this.pageSections[i] === this.currentSection) {
          this.pageSections.splice(i, 1)
          break
        }
      }
    }
  },
}
</script>
