import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ROUTES } from '../contexts/RouteContext';

export default function PrivateRoute ( {children} ) {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return currentUser ? children : <Navigate to={ROUTES.LOGIN} />; // push user back to login page if not logged in
};



