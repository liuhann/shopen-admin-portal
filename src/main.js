import BootStrap from 'vue-spa-boot'
import loginModule from './modules/user-reg-login/module'

const boot = new BootStrap({
  rootApp: () => import('./App'),
  modules: [loginModule],
  servers: {
    website: {
      baseURL: 'http://localhost:3000'
    },
    theme: {
      baseURL: 'http://localhost:3000'
    },
    page: {
      baseURL: 'http://localhost:3000'
    }
  },
  started: function(vm) {
    vm.$router.replace('/site/builder')
  }
})

boot.startUp()
