<style lang="less">
  .shopen-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 156px);
    .login-header{
      padding-top: 40px;
      margin: 0 auto;
      .logo-text {
        box-shadow: inset 7px -7px 0px -4px rgba(255,132,1,0.61);
        display: inline-block;
        vertical-align: top;
        font-weight: normal;
        height: 88px;
        line-height: 90px;
        font-size: 22px;
        color: #ff8401;
        border: 1px solid rgba(255, 132, 1, 0.8);
        border-right: none;
        padding-left: 16px;
        font-style: normal;
      }
      .logo {
        height: 90px;
      }
      .tab {
        text-align: center;
        margin-top: 18px;
        li {
          position: relative;
          display: inline-block;
          line-height: 30px;
          a {
            margin: 0 20px 20px;
            color: #7d8695;
          }
          &.active {
            a {
              border-bottom: 1px solid #ff7302;
            }
          }
        }
      }
    }
    .box {
      min-height: 300px;
    }
  }
</style>
<template>
  <div class="shopen-login">
    <div class="login-header">
      <h1>
        <a>
          <span class="logo-text">{sh</span><!--
          --><img class="logo" src="../../assets/shopen.svg">
        </a>
      </h1>
      <ul class="tab">
        <li :class="tab==='login'? 'active': ''">
          <a class="btn btn-link" @click="tabLogin">登录</a>
        </li>
        <li :class="tab==='register'? 'active': ''">
          <a class="btn btn-link" @click="tabRegister">注册</a>
        </li>
      </ul>
    </div>
    <div class="box">
      <login v-if="tab==='login'"></login>
      <register v-else></register>
    </div>
  </div>
</template>

<script>
import login from './login'
import register from './register'

export default {
  name: 'page-login',
  components: {
    login,
    register
  },
  data () {
    return {
      tab: 'login'
    }
  },
  methods: {
    tabLogin () {
      this.tab = 'login'
    },
    tabRegister () {
      this.tab = 'register'
    }
  }
}
</script>
