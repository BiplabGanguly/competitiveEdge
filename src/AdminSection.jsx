import React from 'react'
import AdminDashboard from "./containers/AdminDashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AdminSection() {
    return (
        <div><Router>
            <Routes>

                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router></div>
    )
}

export default AdminSection