import { Route, Routes } from 'react-router-dom'
import { Fragment, Suspense } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MainLayout from './layouts/MainLayout'
import { privateRoutes, publicRoutes } from './routers'
import Loading from './components/Loading'
import axiosCt from './configs/axiosCT'
import { update } from './redux/userSlice'
import { getCookieToken, setCookieToken } from './optionalFunction'

function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = getCookieToken()
    if (token) {
      const fetchUser = async () => {
        const response = await axiosCt.post('/user/login-token', {})
        if (response !== 'fail' && response.code === 200) {
          if (response.data.role) {
            dispatch(
              update({
                name: response.data.name,
                id: response.data.id,
                role: response.data.role,
                token: response.data.token,
                avartarCDN: response.data.avartar_cdn,
              })
            )
          } else {
            dispatch(
              update({
                name: response.data.name,
                id: response.data.id,
                token: response.data.token,
                avartarCDN: response.data.avartar_cdn,
              })
            )
          }
          setCookieToken(response.data.token)
        } else {
          setCookieToken('')
        }
      }
      fetchUser()
    }
    // eslint-disable-next-line
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
        {user.id && privateRoutes.normalUserRoutes.map(renderRoutes)}
        {user.id && user.role === 0 && privateRoutes.adminRoutes.map(renderRoutes)}
        {user.id && user.role === 1 && privateRoutes.writerRoutes.map(renderRoutes)}
        {user.id && user.role === 2 && privateRoutes.censorRoutes.map(renderRoutes)}
      </Routes>
    </div>
  )
}

export default App
