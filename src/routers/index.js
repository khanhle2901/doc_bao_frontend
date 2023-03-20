import { lazy } from 'react'

import routers from '../configs/baseRoutes'

const AddCategory = lazy(() => import('../pages/AddCategory'))
const Category = lazy(() => import('../pages/Category'))
const CategoryTrash = lazy(() => import('../pages/CategoryTrash'))
const Home = lazy(() => import('../pages/Home'))
const Post = lazy(() => import('../pages/Post'))
const WritePost = lazy(() => import('../pages/WritePost'))
const Profile = lazy(() => import('../pages/Profile'))

const publicRoutes = [
  {
    path: routers.home,
    component: Home,
  },
  {
    path: routers.category,
    component: Category,
  },
  {
    path: routers.post,
    component: Post,
  },
]

const privateRoutes = {
  adminRoutes: [
    {
      path: routers.addCategory,
      component: AddCategory,
    },
    {
      path: routers.categoryTrash,
      component: CategoryTrash,
    },
  ],
  writerRoutes: [
    {
      path: routers.writePost,
      component: WritePost,
    },
  ],
  censorRoutes: [],
  normalUserRoutes: [
    {
      path: routers.profile,
      component: Profile,
    },
  ],
}

export { publicRoutes, privateRoutes }
