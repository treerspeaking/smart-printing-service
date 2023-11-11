import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import HistoryPage from './pages/History'
import FeedbackPage from './pages/Feedback'
import LoginPage from './pages/Login'
import PaymentPage from './pages/Payment'
import PrintRequestPage from './pages/PrintRequest'
import Root from './components/root'

function App() {
  const pathRoot = "/"
  const pathHomePage = "/"
  const pathHistoryPage = "/LichSu"
  const pathFeedbackPage = "/PhanHoi"
  const pathLoginPage = "/login"
  const pathPaymentPage = "/ThanhToan"
  const pathPrintRequestPage = "/YeuCauIn"



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={pathRoot} element={<Root/>}>
            <Route path={pathHomePage} element={<HomePage/>} />
            <Route path={pathHistoryPage} element={<HistoryPage/>} />
            <Route path={pathPaymentPage} element={<PaymentPage/>} />
            <Route path={pathFeedbackPage} element={<FeedbackPage/>} />
            <Route path={pathLoginPage} element={<LoginPage/>} />
            <Route path={pathPrintRequestPage} element={<PrintRequestPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
