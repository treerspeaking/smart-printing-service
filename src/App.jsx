import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { ErrorRoute, AuthenticationRoutes, RootRoute } from './contexts/RouteContext'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ErrorRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {AuthenticationRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path={RootRoute.path} element={RootRoute.element}>
          {RootRoute.children.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;