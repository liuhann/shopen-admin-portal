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
  <div class="section"  v-for="(section) in sections" :key="section.id" @click="choose(section)">
    <!--<transition name="fade">-->
      <div class="operations" v-if="section.hover" @click.stop.self="unChoose(section)">
        <el-button type="primary" icon="el-icon-arrow-up" circle @click.stop="upperSection(section)"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle @click.stop="editSection(section)"></el-button>
        <el-button type="primary" icon="el-icon-arrow-down" circle></el-button>
      </div>
    <!--</transition>-->
    <view-section :name="section.name" :data="section.data" ></view-section>
  </div>
<!--</div>-->
</transition-group>
</template>

<script>
import ViewSection from './view-section'
export default {
  name: 'screen-preview',
  components: {
    'view-section': ViewSection
  },
  props: {
    sections: {
      type: Array
    }
  },
  data() {
    return {

    }
  },
  methods: {
    editSection(section) {
      this.$emit('edit-section', section)
    },
    choose(section) {
      section.hover = true
    },
    unChoose(section) {
      console.log(`un-choose section`)
      section.hover = false
    },
    upperSection(section) {
      console.log(`upper section`)
      this.$emit('upper-section', section)
      section.hover = true
    }
  }
}
</script>
