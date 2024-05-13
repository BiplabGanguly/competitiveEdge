import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminSection/AdminDashboard";
import AdminBranch from "./AdminSection/AdminBranch";

function AdminSection() {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/adminbranch" element={<AdminBranch />} />
      </Routes>
    </div>
  );
}

export default AdminSection;
