import routers from '../configs/baseRoutes'
import Home from '../pages/Home'

const publicRoutes = [
  {
    path: routers.home,
    component: Home,
  },
  {
    path: routers.category,
    component: Home,
  },
]

export { publicRoutes }
