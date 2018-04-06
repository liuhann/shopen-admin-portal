<style lang="less">
@import "./form";
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
      <input class="input-lg form-input email" v-model="user" placeholder="Email 地址">
      <div class="form-icon">
        <i class="fa fa-envelope"></i>
      </div>
    </div>
      <div class="form-group form-group-icon">
        <input class="input-lg form-input password" v-model="pwd" placeholder="密码" type="password">
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
        console.log(result)
        this.$router.replace('/home')
      } else {
        this.showLoginError = true
      }
    }
  }
}
</script>
