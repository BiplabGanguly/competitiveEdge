// Nav.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import PublicNav from "./PublicNav";
import AdminNav from "./AdminNav";

const Nav = () => {
  const location = useLocation();
  const isPublicRoute = !location.pathname.startsWith("/admin/");

  return <div>{isPublicRoute ? <PublicNav /> : <AdminNav />}</div>;
};

export default Nav;
