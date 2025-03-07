import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");
  const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).isAdmin : false;

  if (!token) {
    return <Navigate to="/signin" />;
  }

  if (rest.path === "/admin" && !isAdmin) {
    return <Navigate to="/account" />;
  }

  return element;
};

export default ProtectedRoute;