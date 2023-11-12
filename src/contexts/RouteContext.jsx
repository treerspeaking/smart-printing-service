import HomePage from '../pages/Home'
import HistoryPage from '../pages/History'
import FeedbackPage from '../pages/Feedback'
import LoginPage from '../pages/Login'
import PaymentPage from '../pages/Payment'
import PrintRequestPage from '../pages/PrintRequest'
import Root from '../components/root'
import { NotFound } from '../components/404NotFound'


export const ROUTES = {
  LOGIN: "/smart-printing-service/login",
  NOT_FOUND: "/smart-printing-service/*",
  ROOT: "/smart-printing-service",
  HOME: "/smart-printing-service/Home",
  HISTORY: "/smart-printing-service/HistoryLog",
  PAYMENT: "/smart-printing-service/Payment",
  FEEDBACK: "/smart-printing-service/Feedback",
  PRINT_REQUEST: "/smart-printing-service/PrintRequest",
  // Add more routes here...
};

export const ErrorRoute = [ 
    { path: ROUTES.NOT_FOUND, element: <NotFound/>,}
	];


export const AuthenticationRoutes = [
    { path: ROUTES.LOGIN, element: <LoginPage/> },
    // Add more routes here...
	];



export const RootChildRoutes = [
    { path: ROUTES.HOME, element: <HomePage/> },
    { path: ROUTES.HISTORY, element: <HistoryPage/> },
    { path: ROUTES.PAYMENT, element: <PaymentPage/> },
    { path: ROUTES.FEEDBACK, element: <FeedbackPage/> },
    { path: ROUTES.PRINT_REQUEST, element: <PrintRequestPage/> },
    // Add more routes here...
  ];

export const RootRoute = {
    path: ROUTES.ROOT,
    element: <Root/>,
    children: RootChildRoutes,
  };