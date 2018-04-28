<style lang="less">
  .screen-content {
    overflow-y: auto;
    .section {
      position: relative;
      .operations {
        position: absolute;
        right: 0px;
        bottom: 0;
        align-items: center;
        left: 0;
        top: 0;
        display: flex;
        background: rgba(255, 255, 255, 0.64);
        justify-content: center;
        border: 1px dashed #e11;
      }
    }
  }
</style>

<template>
<transition-group name="flip-list" tag="div" class="screen-content">
  <!--<div class="screen-content">-->
  <div class="section" v-for="(section) in sections" :key="section.id" @click="choose(section)">
    <!--<transition name="fade">-->
      <div class="operations" v-if="section.hover" @click.stop.self="unChoose(section)">
        <el-button type="primary" icon="el-icon-arrow-up" circle @click.stop="moveUp(section)"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle @click.stop="editSection(section)"></el-button>
        <el-button type="primary" icon="el-icon-arrow-down" circle @click.stop="moveDown(section)"></el-button>
      </div>
    <!--</transition>-->
    <view-section :name="section.name" :data="section.data" ></view-section>
  </div>
<!--</div>-->
</transition-group>
</template>

<script>
import ViewSection from './view-section'
import shortid from 'shortid'

export default {
  name: 'screen-preview',
  components: {
    'view-section': ViewSection
  },
  props: {
  },
  data() {
    return {
      sections: []
    }
  },
  methods: {
    addSection(section) {
      section.id = shortid.generate()
      section.hover = false
      delete section.tmpl
      this.sections.push(section)
    },

    moveUp(section) {
      if (this.sections[0] === section) {
        return
      }
      for (let i = 0; i < this.sections.length; i++) {
        if (this.sections[i] === section) {
          const upper = this.sections[i - 1]
          this.$set(this.sections, i - 1, section)
          this.$set(this.sections, i, upper)
          break
        }
      }
    },

    moveDown(section) {
      if (this.sections[this.sections.length - 1] === section) {
        return
      }
      for (let i = 0; i < this.sections.length; i++) {
        if (this.sections[i] === section) {
          const downer = this.sections[i + 1]
          this.$set(this.sections, i + 1, section)
          this.$set(this.sections, i, downer)
          break
        }
      }
    },

    editSection(section) {
      this.$emit('edit-section', section)
    },

    choose(section) {
      // un-choose others
      for (let section of this.sections) {
        section.hover = false
      }
      section.hover = true
    },

    unChoose(section) {
      section.hover = false
    },

    getSections() {
      return this.sections
    },

    removeSection(section) {
      for (let i = 0; i < this.sections.length; i++) {
        if (this.sections[i] === section) {
          this.sections.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>
