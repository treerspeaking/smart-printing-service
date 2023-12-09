import HomePage from '../pages/Home'
import HistoryPage from '../pages/History'
import FeedbackPage from '../pages/Feedback'
import LoginPage from '../pages/Login'
import PaymentPage from '../pages/Payment'
import PrintRequestPage from '../pages/PrintRequest'
import Root from '../components/root'
import { NotFound } from '../components/404NotFound'


export const ROUTES = {
  LOGIN: "/login",
  NOT_FOUND: "/*",
  ROOT: "",
  HOME: "/Home",
  HISTORY: "/HistoryLog",
  PAYMENT: "/Payment",
  FEEDBACK: "/Feedback",
  PRINT_REQUEST: "/PrintRequest",
  LOGOUT: "/LogOut",
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