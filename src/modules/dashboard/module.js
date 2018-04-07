const PageDashBoard = () => import(/* webpackChunkName: "dashboard" */ './pages/dashboard/page-dashboard.vue')

const routes = [{
  path: '/dashboard',
  component: PageDashBoard
}]

export default {
  routes
}
