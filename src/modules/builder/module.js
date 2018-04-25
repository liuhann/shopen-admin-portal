import {SiteBuilder} from './pages/page'
import * as builderModel from './models/builder'

const routes = [{
  path: '/page/builder/:id',
  component: SiteBuilder
}]

export default {
  routes,
  models: [builderModel]
}
