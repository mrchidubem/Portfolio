import React from "react";
import { Outlet } from "react-router-dom";

const GlobalProviders = () => {
  // Wrap with context providers if needed
  return (
    <>
      {/* Example: <AuthProvider> */}
      <Outlet /> 
    </>
  );
};

export default GlobalProviders;
