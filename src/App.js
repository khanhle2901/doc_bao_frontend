import { Route, Routes } from 'react-router-dom'
import { Fragment, Suspense, useEffect, useState } from 'react'

import MainLayout from './layouts/MainLayout'
import { privateRoutes, publicRoutes } from './routers'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './redux/userSlice'
import Loading from './components/Loading'
function App() {
  const user = useSelector((state) => state.user)
  console.log(user)
  const dispatch = useDispatch()

  const writerInfo = {
    name: 'khanh',
    id: 9,
    role: 1,
    token:
      'U2FsdGVkX18Q8QE9vaCJxISdz+nQ4wTertdABPW/CK/eURBHzE9VEfheWGLCfFbSfA/l6p74wsYY4v+18ICEGPTF4qtBySkMnSxjpEDlRb4=',
  }
  const adminInfo = {
    name: 'admin',
    id: 1,
    role: 0,
    token: 'U2FsdGVkX19kq2rTzsT0zwl3OWyAt8DLw3FBTikZVz5FbUWiMlAU3gyaiM1ccE5msYHYs0e97//iXtDofztuxw==',
  }

  useEffect(() => {
    dispatch(update(adminInfo))
  }, [])

  const renderRoutes = (route, index) => {
    let Layout = MainLayout
    let Page = route.component
    if (route.layout) {
      Layout = route.layout
    } else if (route.layout) {
      Layout = Fragment
    }
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Suspense fallback={<Loading />}>
              <Page />
            </Suspense>
          </Layout>
        }
      />
    )
  }

  return (
    <div className='App'>
      <Routes>
        {publicRoutes.map(renderRoutes)}
        {user.id && user.role === 0 && privateRoutes.adminRoutes.map(renderRoutes)}
        {user.id && user.role === 1 && privateRoutes.writerRoutes.map(renderRoutes)}
        {user.id && user.role === 2 && privateRoutes.censorRoutes.map(renderRoutes)}
      </Routes>
    </div>
  )
}

export default App
