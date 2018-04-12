<style lang="less">
  @import '../../style/common';
</style>

<template>
<div class="site-layout">
  <div class="header">
    <div class="header-actions">
      <el-button type="primary" size="medium" plain icon="el-icon-edit" @click="returnList">返回列表</el-button>
    </div>
  </div>
  <div class="content">
  </div>
</div>
</template>

<script>
import {Button} from 'element-ui'

export default {
  name: 'page-site-create',
  components: {
    'el-button': Button
  },
  methods: {
    returnList () {
      this.$router.replace('/sites')
    }
  }
}
</script>
