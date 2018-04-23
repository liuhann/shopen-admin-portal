<style lang="less">
.main-frame {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .main-header {
    padding: 0 20px;
    width: 100vw;
    box-sizing: border-box;
    height: 50px;
    font-size: 14px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    .logo-info {
      flex: 1;
      .logo {
        height: 32px;
      }
      .logo-text {
        display: inline-block;
        vertical-align: top;
        line-height: 32px;
        height: 32px;
        letter-spacing: 8px;
        padding-left: 10px;
      }
    }
    .user-notify {
      display: flex;
      font-size: 20px;
      color: #666;
      line-height: 35px;
      .avatar {
        cursor: pointer;
        margin-left: 20px;
        background: #ffa300;
        color: #fff;
        height: 35px;
        padding: 2px;
        font-size: 16px;
        line-height: 35px;
        width: 35px;
        text-align: center;
        border-radius: 42px;
        &:hover {
          background-color: #FF8B08;
        }
      }

      .el-badge__content.is-fixed.is-dot {
        right: 8px;
        top: 12px
      }
    }
  }
  .main-content {
    display: flex;
    width: 100%;
    height: calc(100% - 50px);
    position: relative;
    background: whitesmoke;
  }
}
</style>

<template>
  <div class="main-frame">
    <header class="main-header">
      <div class="logo-info">
        <img class="logo" src="./assets/shopen.svg"><span class="logo-text">SHOPEN</span>
      </div>
      <div class="user-notify">
        <el-badge is-dot class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
        <div class="avatar">
          <div class="default-avatar" v-popover:popover1>刘</div>
        </div>
        <el-popover
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        </el-popover>
      </div>
    </header>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {Popover, Badge} from 'element-ui'
export default {
  name: 'frame-main',
  components: {
    'el-popover': Popover,
    'el-badge': Badge
  }
}
</script>
