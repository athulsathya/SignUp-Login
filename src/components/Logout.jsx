import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const nav = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    nav("/login");
  }, []);

  return null;
}

export default Logout;