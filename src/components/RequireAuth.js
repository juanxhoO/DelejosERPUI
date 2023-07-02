import { useContext } from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const { setOpen } = useContext(DataContext);

  if (auth?.accessToken) {
    console.log("token present");
  }
  return auth?.accessToken ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
