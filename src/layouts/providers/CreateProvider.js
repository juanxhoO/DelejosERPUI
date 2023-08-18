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
import { Card, MenuItem, TableBody, TableContainer, TableRow, Typography } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import MDInput from "components/MDInput";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import DataTable from "examples/Tables/DataTable";
import Select from "@mui/material/Select";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import MDTypography from "components/MDTypography";
import providersTableData from "layouts/tables/data/providersTableData";

function CreateProvider() {
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({});
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

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
      label: "Password",
      id: "password",
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
      type: "select",
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
      type: "textarea",
    },
  ];

  useEffect(() => {
    //Fetching Countries
    async function fetchCountries() {
      try {
        const response = await axios.get("http://localhost:3000/v1/countries");
        setCountries(response.data)
       
      }
      catch (error) {
        console.log(error);
      }
    }
    // Call the handleProvider function passing the id parameter
    fetchCountries();
  }, []);

  const submitChanges = async () => {
    console.log(inputValues);
    try {
      const response = await axios.post("http://localhost:3000/v1/auth/register", inputValues, { withCredentials: false });
      console.log(response.data);
      navigate("/providers");
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
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
                      {(() => {
                        switch (row.type) {
                          case 'textarea':
                            return (
                              <TextareaAutosize
                                minRows={7}
                                required
                                value={inputValues[row.id] || ''}
                                onChange={(e) => {
                                  setInputValues((prevValues) => ({
                                    ...prevValues,
                                    [row.id]: e.target.value,
                                  }));
                                }}
                              />
                            );
                          case 'select':
                            return (
                              <Select
                                value={inputValues[row.id] || ''}
                                onChange={(e) => {
                                  setInputValues((prevValues) => ({
                                    ...prevValues,
                                    [row.id]: e.target.value,
                                  }));
                                }}
                              >
                                {countries.map((country) => (
                                  <MenuItem key={country.id} value={country.name}>{country.name}</MenuItem>
                                ))}
                              </Select>
                            );
                          default:
                            return (
                              <MDInput
                              required
                                variant="outlined"
                                label={row.label}
                                value={inputValues[row.id] || ''}
                                onChange={(e) => {
                                  setInputValues((prevValues) => ({
                                    ...prevValues,
                                    [row.id]: e.target.value,
                                  }));
                                }}
                              />
                            );
                        }
                      })()}
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
              Submit
            </MDButton>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateProvider;
