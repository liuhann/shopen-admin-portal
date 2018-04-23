const PageGallery = () => import(/* webpackChunkName: "gallery" */ './pages/gallery/page-gallery.vue')

const routes = [{
  path: '/gallery',
  component: PageGallery
}]

export default {
  routes
}
