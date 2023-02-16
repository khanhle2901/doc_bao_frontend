import { Route, Routes } from 'react-router-dom'
import { Fragment } from 'react'

import MainLayout from './layouts/MainLayout'
import { publicRoutes } from './routers'

function App() {
  return (
    <div className='App'>
      <Routes>
        {publicRoutes.map((route, index) => {
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
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App
