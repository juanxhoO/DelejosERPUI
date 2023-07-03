import React from "react";
import { render } from "react-dom";
import useAuth from "hooks/useAuth";
import MDButton from ".";

const LogoutListener = () => {};

function LogoutBtn() {
  const { auth } = useAuth();
  console.log("est logout");
  return (
    <div>
      <p>dsdsd</p>
      <MDButton component="a" target="_blank" rel="noreferrer" variant="gradient" color="red">
        Logout
      </MDButton>
    </div>
  );
}

export default LogoutBtn;
