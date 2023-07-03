import React from "react";
import useAuth from "hooks/useAuth";
import MDButton from ".";
const LogoutListener = () => {
  console.log("test logout");
};

function LogoutBtn() {
  const { auth } = useAuth();
  console.log("est logout");
  return (
    <MDButton component="a" target="_blank" rel="noreferrer" variant="gradient">
      Logout
    </MDButton>
  );
}

export default LogoutBtn;
