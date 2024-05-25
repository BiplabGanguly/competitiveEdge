import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function AdminRoute() {
    const navigate = useNavigate();
    const admin_token = localStorage.getItem('admin_token');
    const admin_permission = localStorage.getItem('admin_permission');

    useEffect(() => {
        if (!isValidAdminToken(admin_token) || !isValidAdminPermission(admin_permission)) {
            navigate('/admin-login');
        }
    }, [admin_token, admin_permission, navigate]);

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

    return admin_token && admin_permission === 'accept' ? <Outlet /> : null;
}

export default AdminRoute;
