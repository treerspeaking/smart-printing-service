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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path='/*' element={<NotFound/>}></Route>
          <Route path="/" element={<Root/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/LichSu" element={<HistoryPage/>} />
            <Route path="/ThanhToan" element={<PaymentPage/>} />
            <Route path="/PhanHoi" element={<FeedbackPage/>} />
            
            <Route path="/YeuCauIn" element={<PrintRequestPage/>}></Route>
            
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
