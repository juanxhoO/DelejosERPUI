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
import Grid from "@mui/material/Grid";
import { Card, TableBody, TableContainer, TableRow, Typography } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import MDInput from "components/MDInput";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Provider() {
  const [provider, SetProvider] = useState(null);
  const { id } = useParams();

  const rows = [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Country",
      type: "text",
    },
    {
      label: "City",
      type: "text",
    },
    {
      label: "Email",
      type: "email",
    },
  ];

  useEffect(() => {
    //Fetching Data from ERP API BACKEND
    const handleProvider = async (param_id) => {
      try {
        const response = await axios.get(axios);
        const data = response.data;

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    //handleProvider(id);
    console.log(id);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <p>Provider {id}</p>
        <TableContainer>
          <MDBox>
            <Table>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Typography>{row.label}</Typography>
                    </TableCell>
                    <TableCell>
                      <MDInput variant="outlined" label="name" value="Juan Granja"></MDInput>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default Provider;
