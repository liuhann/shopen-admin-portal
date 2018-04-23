import AsyncBoot from 'async-boot'
import loginModule from './modules/login/module'
import siteModule from './modules/site/module'
import galleryModule from './modules/gallery/module'
import builderModule from './modules/builder/module'

const boot = new AsyncBoot({
  rootApp: () => import('./App'),
  modules: [loginModule, siteModule, galleryModule, builderModule],
  servers: {
    shopen: {// 核心服务
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
  bootCompleted: [async (ctx, next) => {
    await import('./common/element-ui-dependency')
    await next()
  }],
  started: async function (vm) {
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
