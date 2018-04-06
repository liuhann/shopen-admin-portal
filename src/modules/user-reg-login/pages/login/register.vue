<style lang="less">
  @import "./form";
</style>

<template>
<div class="register-body">
  <div class="form-error" v-if="registerError">
    <span class="form-error-icon">
    <i class="fa fa-info-circle"></i>
    {{registerError}}
    </span>
  </div>
  <div class="form-group form-group-icon">
    <input class="input-lg form-input name" v-model="name" placeholder="姓名">
    <div class="form-icon">
      <i class="fa fa-user"></i>
    </div>
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
    <button class="btn btn-primary btn-block submit" data-style="slide-up" @click="register">
      免费注册
    </button>
  </div>
  </div>
</template>

<script>
import userModel from '../../models/user'

export default {
  name: 'register',
  data () {
    return {
      user: '',
      pwd: '',
      name: '',
      registerError: ''
    }
  },
  methods: {
    async register () {
      const result = await userModel.register({
        name: this.name,
        email: this.user,
        pwd: this.pwd
      }, this.ctx)
      if (result.statusCode === 200) {
        this.$emit('login')
      } else {
        this.registerError = result.errorMsg
      }
    }
  }
}
</script>
