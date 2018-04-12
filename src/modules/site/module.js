const PageSiteList = () => import(/* webpackChunkName: "site" */ './pages/list/page-site-list.vue')
const PageSiteCreate = () => import(/* webpackChunkName: "site" */ './pages/create/page-site-create.vue')

const routes = [{
  path: '/sites',
  component: PageSiteList
}, {
  path: '/site/create',
  component: PageSiteCreate
}]

export default {
  routes
}
