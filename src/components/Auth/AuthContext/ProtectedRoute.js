import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, redirectPath }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
