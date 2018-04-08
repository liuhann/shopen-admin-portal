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
      flex: 1;
      display: flex;
      .header-notification {
        flex:1;
      }
      .avatar {
        width: 80px;
      }
    }
    nav {
      flex: 2;
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
      <nav>
        <ul>
          <li><a class="is-active" aria-current="true" href="/workspace/apps"><span class="icon icon icon-user"></span>我的项目</a>
          </li>
          <li><a aria-current="false" href="/workspace/teams"><span class="icon icon icon-users"></span>我的团队</a></li>
          <li><a aria-current="false" href="/workspace/page/forum"><span class="icon icon icon-comment"></span>讨论区</a>
          </li>
        </ul>
      </nav>
      <div class="user-notify">
        <div class="header-notification">
          <i class="fa fa-bell-o"></i>
        </div>
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
import {Popover} from 'element-ui'
export default {
  name: 'frame-main',
  components: {
    'el-popover': Popover
  }
}
</script>
