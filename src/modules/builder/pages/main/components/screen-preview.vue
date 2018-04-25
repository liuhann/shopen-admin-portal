<style lang="less">
  .screen-content {
    overflow-y: auto;
  }
</style>

<template>
<div class="screen-content">
  <view-section v-for="(section, index) in sections" :name="section.name" :data="section.data" :key="index"></view-section>
</div>
</template>

<script>
import ViewSection from './view-section'
export default {
  name: 'screen-preview',
  components: {
    'view-section': ViewSection
  },
  props: {
    loadedSections: {
      type: Array
    }
  },
  data() {
    return {
      sections: [
      ],
    }
  },
  methods: {

  }
}
</script>
