import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import HistoryPage from './pages/History'
import FeedbackPage from './pages/Feedback'
import LoginPage from './pages/Login'
import PaymentPage from './pages/Payment'
import PrintRequestPage from './pages/PrintRequest'
import Root from './components/root'
import { NotFound } from './components/404NotFound'

function App() {

  const routes = [
    { path: "/smart-printing-service/login", element: <LoginPage/> },
    { path: "/smart-printing-service/*", element: <NotFound/> },
    { path: "/smart-printing-service", element: <Root/> },
    { path: "/smart-printing-service", element: <HomePage/> },
    { path: "/smart-printing-service/LichSu", element: <HistoryPage/> },
    { path: "/smart-printing-service/ThanhToan", element: <PaymentPage/> },
    { path: "/smart-printing-service/PhanHoi", element: <FeedbackPage/> },
    { path: "/smart-printing-service/YeuCauIn", element: <PrintRequestPage/> },
    // Add more routes here...
  ];


  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
