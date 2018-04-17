<style lang="less">
.mobile-shell-nova-outer {
  width: 80px;
  height: 160px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  position: relative;
  transition: transform .3s linear;
  .screen {
    width: 76px;
    left: 1px;
    top: 6px;
    position: absolute;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
  }
  .home-btn {
    position: absolute;
    width: 20px;
    left: 30px;
    bottom: 3px;
    height: 4px;
    border-radius: 5px;
    border: 1px solid #c7c7c7;
  }
}
</style>

<template>
<div class="mobile-shell-nova-outer" :style="checked? check: {}">
  <div class="screen" :style="background">
  </div>
  <div class="home-btn">
  </div>
</div>
</template>

<script>
export default {
  name: 'mobile-shell-nova',
  props: {
    checked: {
      type: Boolean
    },
    cover: {
      type: String
    },
    checkedColor: {
      type: String,
      default: '#ff8401'
    },
  },
  data () {
    return {
      check: {
        transform: 'scale(1.1)',
        border: '1px solid ' + this.checkedColor
      },
      background: {
        backgroundImage: 'url("' + this.cover + '")',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>
