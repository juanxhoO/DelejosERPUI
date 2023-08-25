/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import axios from "config/axios";
import { useEffect, useState } from "react";

function Cover() {
  const [email, SetEmail] = useState("");
  const [error, setError] = useState("");

  const handleNewPass = async function (e) {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/auth/forgot-password",
        { email: email },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {}, [email]);

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox onSubmit={handleNewPass} component="form" role="form">
            <MDBox mb={4}>
              <MDInput
                onChange={(e) => SetEmail(e.target.value)}
                type="email"
                value={email}
                label="Email"
                variant="standard"
                fullWidth
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                reset
              </MDButton>
            </MDBox>

            <p>{error}</p>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
