import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminSection/AdminDashboard";
import AdminBranch from "./AdminSection/AdminBranch";
import AdminDashbordProfile from "./components/AdminDashbordProfile";
import AdminDashboardInstitute from "./components/AdminDashboardInstitute";

function AdminSection() {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/adminbranch" element={<AdminBranch />} />
        <Route path="/admin/admindashbordprofile" element={<AdminDashbordProfile/>} />
        <Route path="/admin/admindashboardinstitute" element={<AdminDashboardInstitute />} />
      </Routes>
    </div>
  );
}

export default AdminSection;
