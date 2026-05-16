import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, roles = [] }) {

  const raw = localStorage.getItem("user");

  const user = raw ? JSON.parse(raw) : null;

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Role check
  if (roles.length > 0 && !roles.includes(user.userType)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;