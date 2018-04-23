const PageSiteList = () => import(/* webpackChunkName: "site" */ './pages/list/page-site-list.vue')
const PageSiteCreate = () => import(/* webpackChunkName: "site" */ './pages/create/page-site-create.vue')
const PageSiteFrame = () => import(/* webpackChunkName: "site" */ './pages/overview/page-site-overview.vue')
const PageSitePageEdit = () => import(/* webpackChunkName: "site" */ './pages/site-page/site-page-edit.vue')

const routes = [{
  path: '/sites',
  component: PageSiteList
}, {
  path: '/site/create',
  component: PageSiteCreate
}, {
  path: '/site/show/:site',
  component: PageSiteFrame
}, {
  path: '/page/edit/:site/:id?',
  component: PageSitePageEdit
}]

export default {
  routes
}
