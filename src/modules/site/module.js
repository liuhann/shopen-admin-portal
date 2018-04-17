const PageSiteList = () => import(/* webpackChunkName: "site" */ './pages/list/page-site-list.vue')
const PageSiteCreate = () => import(/* webpackChunkName: "site" */ './pages/create/page-site-create.vue')
const PageSiteFrame = () => import(/* webpackChunkName: "site" */ './pages/frame/site-frame.vue')

const routes = [{
  path: '/sites',
  component: PageSiteList
}, {
  path: '/site/create',
  component: PageSiteCreate
}, {
  path: '/site/frame/:id',
  component: PageSiteFrame
}]

export default {
  routes
}
