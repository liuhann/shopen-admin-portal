<style lang="less">
  @import "./style/app";
</style>

<template>
  <div id="app">
    <frame-main v-if="frame==='main'"></frame-main>
    <router-view v-if="frame==='login'"></router-view>
  </div>
</template>

<script>
import FrameMain from './frame-main'

export default {
  name: 'App',
  components: {
    FrameMain
  },
  data () {
    return {
      frame: 'login'
    }
  }
}
</script>
