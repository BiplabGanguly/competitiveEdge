import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './containers/AdminDashboard';

function AdminSection() {
    return (
        <div>
            <Routes>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </div>
    );
}

export default AdminSection;

