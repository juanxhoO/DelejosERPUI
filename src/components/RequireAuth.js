import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.accessToken ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/authentication/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
