import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ROUTES } from '../contexts/RouteContext';

const LoginSignUpRoute = ( {children} ) => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to={ROUTES.HOME} /> : children; // push user back to home back if they are al
};

export default LoginSignUpRoute;