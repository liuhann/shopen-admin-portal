import BootStrap from 'vue-spa-boot'
import loginModule from './modules/user-reg-login/module'

const boot = new BootStrap({
  rootApp: () => import('./App'),
  modules: [loginModule],
  servers: {
    website: {// 站点 open 服务
      baseURL: 'http://localhost:3000'
    },
    theme: {// 主题模板静态站
      baseURL: 'http://localhost:3000'
    },
    page: {// 页面配置服务器
      baseURL: 'http://localhost:3000'
    },
    uc: {// 用户中心服务器
      baseURL: 'http://localhost:3000'
    }
  },
  started: function (vm) {
    vm.$router.replace('/login')
  }
})

boot.startUp()
