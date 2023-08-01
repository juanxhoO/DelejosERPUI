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
import MDButton from "components/MDButton";

function Provider() {
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({});

  const rows = [
    {
      label: "Name",
      id: "name",
      type: "text",
    },
    {
      label: "Last Name",
      id: "lastname",
      type: "text",
    },
    {
      label: "Contact",
      id: "contact",
      type: "text",
    },
    {
      label: "Address",
      id: "address",
      type: "text",
    },
    {
      label: "Phone Number",
      id: "phone",
      type: "text",
    },
    {
      label: "Country",
      id: "country",
      type: "text",
    },
    {
      label: "City",
      id: "city",
      type: "text",
    },
    {
      label: "Email",
      id: "email",
      type: "email",
    },
    {
      label: "Observations",
      id: "observations",
      type: "text",
    },
  ];

  const person1 = {
    name: "Juan",
    lastname: "Granja",
    country: "Mexico",
    city: "Guadalajara",
    email: "ggjuanb@hotmail.com",
  };

  useEffect(() => {
    //Fetching Data from ERP API BACKEND
    const handleProvider = async (param_id) => {
      try {
        //const response = await axios.get(axios);
        const data = {
          name: "Juan",
          lastname: "Granja",
          country: "Mexico",
          city: "Guadalajara",
          email: "ggjuanb@hotmail.com",
        };
        // Update input values with the retrieved data
        setInputValues(data); // Assuming the response data is in the same structure as person1 object
      } catch (error) {
        console.log(error);
      }
    };

    // Call the handleProvider function passing the id parameter
    handleProvider(id);
  }, []);

  const submitChanges = async () => {
    console.log("changes submitted");
    console.log(inputValues);
    // try {
    //   const response = await axios.put("/api", inputValues, { withCredentials: true });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <p>Provider {id}</p>
        <TableContainer>
          <MDBox p={4}>
            <Table>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Typography sx={{ fontWeight: "bold" }}>{row.label}:</Typography>
                    </TableCell>
                    <TableCell>
                      <MDInput
                        variant="outlined"
                        label={row.label}
                        value={inputValues[row.id] || ""}
                        onChange={(e) => {
                          setInputValues((prevValues) => ({
                            ...prevValues,
                            [row.id]: e.target.value,
                          }));
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <MDButton
              variant="gradient"
              color="info"
              onClick={submitChanges}
              p={4}
              sx={{ margin: "20px", float: "right" }}
            >
              Submit Changes
            </MDButton>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default Provider;
