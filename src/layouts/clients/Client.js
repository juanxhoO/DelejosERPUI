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
import { TableContainer, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useParams } from "react-router-dom";
import axios from "config/axios";
import { useEffect } from "react";
import { useState } from "react";
import MDInput from "components/MDInput";
import PhonesList from "components/PhonesList";

function Client() {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const fetchClient = async () => {
    try {
      const response = await axios.get(`/clients/` + id);
      setClient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <TableContainer>
          <MDBox p={4}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Name</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      readOnly
                      fullWidth
                      variant="outlined"
                      label="name"
                      value={client.name || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Lastname</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      readOnly
                      fullWidth
                      variant="outlined"
                      label="lastname"
                      value={client.lastname || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Address</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      readOnly
                      fullWidth
                      variant="outlined"
                      label="Address"
                      value={client.address || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Phones</Typography>
                  </TableCell>
                  <TableCell>
                    <PhonesList phones={client?.phones || []} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      readOnly
                      fullWidth
                      variant="outlined"
                      label="Email"
                      value={client.email || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Country</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="Country"
                      readOnly
                      fullWidth
                      value={client.country?.name || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>City</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="City"
                      readOnly
                      fullWidth
                      value={client.city?.name || ""}
                    ></MDInput>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default Client;
