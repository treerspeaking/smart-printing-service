import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home'
import HistoryPage from './pages/History'
import FeedbackPage from './pages/Feedback'
import LoginPage from './pages/Login'
import PaymentPage from './pages/Payment'
import PrintRequestPage from './pages/PrintRequest'
import Root from './component/root'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/LichSu" element={<HistoryPage/>} />
            <Route path="/ThanhToan" element={<PaymentPage/>} />
            <Route path="/PhanHoi" element={<FeedbackPage/>} />
            <Route path="/login" element={<LoginPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
