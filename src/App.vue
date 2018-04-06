<style lang="less">
  @import "./style/app";
</style>

<template>
  <div id="app">
    <div class="main-frame" v-if="frame==='main'">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <div class="main-frame" v-if="frame==='login'">
      <router-view/>
    </div>
    <div class="main-frame" v-if="frame==='open'">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      frame: 'login'
    }
  }
}
</script>
