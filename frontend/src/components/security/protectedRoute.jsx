import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Loader from '../loader/Loader';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(UserContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
