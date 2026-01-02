import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const isAuthenticated = true; // Replace with your auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; 
};

export default RequireAuth;
