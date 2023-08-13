import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = true;

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate
            to="/login"
        />
    );
}

export default PrivateRoute;
