import BootStrap from 'vue-spa-boot'
import loginModule from './modules/user-reg-login/module'
import siteModule from './modules/site/module'
import galleryModule from './modules/aliyun-oss-gallery/module'

const boot = new BootStrap({
  rootApp: () => import('./App'),
  modules: [loginModule, siteModule, galleryModule],
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
    },
    product: {
      baseURL: 'http://localhost:3000'
    },
    image: {
      baseURL: 'http://localhost:3000'
    },
    dictionary: {
      baseURL: 'http://localhost:3000'
    }
  },
  started: function (vm) {
    vm.$router.beforeEach((to, from, next) => {
      if (to.meta && to.meta.frame) {
        vm.frame = to.meta.frame
      } else {
        vm.frame = 'main'
      }
      next()
    })
    vm.$router.replace('/sites')
  }
})

boot.startUp()
