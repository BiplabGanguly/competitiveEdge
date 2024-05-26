import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function AdminRoute() {
    const navigate = useNavigate();
    const admin_token = localStorage.getItem('admin_token');
    const admin_permission = localStorage.getItem('admin_permission');
    const admin_profile = localStorage.getItem("admin_profile");

    useEffect(() => {
        if (!isValidAdminToken(admin_token) || !isValidAdminPermission(admin_permission) || !isVaildAdminProfile(admin_profile)) {
            navigate('/admin-login');
        }
    }, [admin_token, admin_permission, navigate, admin_profile]);

    // Function to validate admin_token
    const isValidAdminToken = (token) => {
        // Implement your validation logic here
        return !!token; // Example: Just checking if token exists
    };

    // Function to validate admin_permission
    const isValidAdminPermission = (permission) => {
        // Implement your validation logic here
        return permission === 'accept'; // Example: Checking if permission is 'accept'
    };

    const isVaildAdminProfile = (profile) => {
        return profile === 'faculty';
    }

    return admin_token && admin_permission === 'accept' && admin_profile === 'faculty' ? <Outlet /> : null;
}

export default AdminRoute;
