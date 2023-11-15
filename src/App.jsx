import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Navigate } from 'react-router-dom'

import { ErrorRoute, AuthenticationRoutes, RootRoute, ROUTES } from './contexts/RouteContext'
import PrivateRoute from './route/PrivateRoute'
import LoginRoute from './route/LoginRoute'
import {action as logoutaction} from './route/LogOut'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// I need to create this so the form can work
const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          {ErrorRoute.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {AuthenticationRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<LoginRoute children={route.element}/> } />
          ))}
          <Route path={RootRoute.path} element={RootRoute.element}>
            <Route index element={<Navigate to={ROUTES["HOME"]} replace />} />
            {RootRoute.children.map((route, index) => (
              <Route key={index} path={route.path} element={<PrivateRoute children={route.element}/>} />
            ))}
            <Route path='/smart-printing-service/LogOut' action={logoutaction} element={<>hello</>}/>
          </Route>
        </Route>
  )
);

function App() {
  return (
    // <BrowserRouter>
    //   <AuthProvider>
    //     <Routes>
    //       {ErrorRoute.map((route, index) => (
    //         <Route key={index} path={route.path} element={route.element} />
    //       ))}
    //       {AuthenticationRoutes.map((route, index) => (
    //         <Route key={index} path={route.path} element={<LoginRoute children={route.element}/> } />
    //       ))}
    //       <Route path={RootRoute.path} element={RootRoute.element}>
    //         <Route index element={<Navigate to={ROUTES["HOME"]} replace />} />
    //         {RootRoute.children.map((route, index) => (
    //           <Route key={index} path={route.path} element={<PrivateRoute children={route.element}/>} />
    //         ))}
    //         <Route path='/smart-printing-service/LogOut' ac={logoutaction} element={<>hello</>}/>
    //       </Route>
    //     </Routes>
    //   </AuthProvider>
    // </BrowserRouter>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}


export default App;