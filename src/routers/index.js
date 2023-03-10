import routers from '../configs/baseRoutes'
import Home from '../pages/Home'
import Post from '../pages/Post'
import WritePost from '../pages/WritePost'

const publicRoutes = [
  {
    path: routers.home,
    component: Home,
  },
  {
    path: routers.category,
    component: Home,
  },
  {
    path: routers.post,
    component: Post,
  },
]

const privateRoutes = [
  {
    path: routers.writePost,
    component: WritePost,
  },
]

export { publicRoutes, privateRoutes }
