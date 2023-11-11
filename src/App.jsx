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
          <Route path="/smart-printing-service/login" element={<LoginPage/>} />
          <Route path='/smart-printing-service/*' element={<NotFound/>}></Route>
          <Route path="/smart-printing-service" element={<Root/>}>
            <Route path="/smart-printing-service" element={<HomePage/>} />
            <Route path="/smart-printing-service/LichSu" element={<HistoryPage/>} />
            <Route path="/smart-printing-service/ThanhToan" element={<PaymentPage/>} />
            <Route path="/smart-printing-service/PhanHoi" element={<FeedbackPage/>} />
            
            <Route path="/smart-printing-service/YeuCauIn" element={<PrintRequestPage/>}></Route>
            
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
