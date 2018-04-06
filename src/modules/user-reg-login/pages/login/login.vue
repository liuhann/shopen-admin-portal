<style lang="less">
  .login-body {
    margin: 0 auto;
    width: 260px;
    .form-group {
      margin-bottom: 10px;
      position: relative;
      width: 100%;
      height: 45px;
      input {
        line-height: 16px;
        width: 100%;
        height: 100%;
        outline: none;
        border: 1px solid #e0e0e0;
        padding-left: 45px;
        box-sizing: border-box;
        background-color: #fff !important;
        transition: border-color 0.15s ease-in-out, background-color 0s !important;
        &:focus {
          border:1px solid #ff8401;
          box-shadow: 0 6px 20px 0 rgba(245,92,84,0.16);
        }
      }
      .form-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 45px;
        height: 100%;
        font-size: 20px;
        line-height: 45px;
        text-align: center;
        color: #c5c5c5;
      }
      button {
        color: white;
        border: 1px solid transparent;
        background: #ff8401;
        box-shadow: 0px 6px 20px 0px rgba(245,92,84,0.16);
        width: 100%;
        height: 100%;
        margin: 5px 0;
        line-height: 43px;
      }
    }
    .form-error {
      background: rgba(245, 93, 84, 0.1);
      border: 1px solid rgba(245,92,84,0.16);
      color: #ff7302;
      margin: 10px 0;
      padding: 10px;
      text-align: left;
    }
  }
  input:-webkit-autofill {
    background-color: #fff !important;
  }
</style>

<template>
  <div class="login-body">
    <div class="form-error" v-if="showLoginError">
      <span class="form-error-icon">
      <i class="fa fa-info-circle"></i>
      无效的Email或密码
      </span>
    </div>
    <div class="form-group form-group-icon">
      <input class="input-lg form-input email" name="email" placeholder="Email 地址">
      <div class="form-icon">
        <i class="fa fa-envelope"></i>
      </div>
    </div>
      <div class="form-group form-group-icon">
        <input class="input-lg form-input password" name="password" placeholder="密码" type="password">
        <div class="form-icon">
          <i class="fa fa-lock"></i>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block submit" data-style="slide-up" @click="doLogin">
          登录
        </button>
      </div>
  </div>
</template>

<script>
import userModel from '../../models/user'

export default {
  name: 'login',
  data () {
    return {
      showLoginError: false,
      user: '',
      pwd: ''
    }
  },
  methods: {
    async doLogin () {
      const result = await userModel.login({
        email: this.user,
        pwd: this.pwd
      }, this.ctx)
      if (result.statusCode === 200) {
        this.$router.replace('/home')
      } else {
        this.showLoginError = true
      }
    }
  }
}
</script>
