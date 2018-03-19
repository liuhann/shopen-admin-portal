<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>


<template>
  <div id="app">
    <div class="main-frame" v-if="frame==='main'">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <div class="main-frame" v-if="frame==='login'">
      <img src="./assets/logo.png">
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
    data() {
      return {
        frame: 'main'
      }
    },
  };
</script>
