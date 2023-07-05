import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "@mui/material";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

function LogoutBtn() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = async () => {
    setAuth({});
    try {
      const response = await axios.post("/api/logout", { withCredentials: true });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    navigate("/authentication/sign-in");
  };

  return (
    <Link
      href="#"
      rel="noreferrer"
      sx={{ textDecoration: "none" }}
      onClick={handleLogout}
      component="a"
      target="_blank"
      variant="gradient"
    >
      <SidenavCollapse name="Logout" icon="Logout" />
    </Link>
  );
}

export default LogoutBtn;
