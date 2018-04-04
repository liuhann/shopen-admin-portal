import {PageUserLogin} from './pages/page'
import * as builderModel from './models/user'

const routes = [{
  path: '/login',
  component: PageUserLogin
}]

export default {
  routes,
  models: [builderModel]
}
