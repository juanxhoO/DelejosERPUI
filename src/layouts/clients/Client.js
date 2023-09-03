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
import { TableContainer, Table, TableBody, TableCell, TableRow, Typography, MenuItem, InputLabel } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useParams } from "react-router-dom";
import axios from "config/axios";
import { useEffect } from "react";
import { useState } from 'react'
import Select from "@mui/material/Select";

import MDButton from "components/MDButton";
import MDInput from "components/MDInput";


function Client() {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [countries, setCountries] = useState([])
  const fetchClient = async () => {
    try {
      const response = await axios.get(`/clients/` + id);
      setClient(response.data);
      console.log(response.data);
    }
    catch (error) {
      console.log(error)
    }
  }

  const submitChanges = (e) => {
    e.preventDefault();
    console.log("submitted");
  }


  const fetchCountries = async () => {
    console.log("test");
    try {
      const response = await axios.get('/countries');
      setCountries(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchClient();
    fetchCountries();
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <TableContainer>
          <MDBox onSubmit={submitChanges} component="form" p={4}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Name</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="name"
                      value={client.name || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          name: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          name: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Lastname</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="lastname"
                      value={client.lastname || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          lastname: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          lastname: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Address</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="Address"
                      value={client.address || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          address: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          address: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Phone</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="Phone"
                      value={client.phone || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          phone: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          phone: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Email</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="Email"
                      value={client.email || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          email: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          email: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Country</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput variant="outlined"
                      label="Country"
                      value={client.country?.name || ""}
                      onChange={(e) => {
                        setClient((prevValues) => ({
                          ...prevValues,
                          email: e.target.value,
                        }));
                      }}>

                    </MDInput>
                    {/* <select
                      label="Country"
                      value={client.country || ""}
                      onChange={(e) => {
                        const selectedCountryName = e.target.value;
                        const selectedCountry = countries.find(
                          (country) => country.name === selectedCountryName
                        );

                        if (selectedCountry) {
                          setInputValues((prevValues) => ({
                            ...prevValues,
                            countryId: selectedCountry.id,
                          }));
                          setClient((prevValues) => ({
                            ...prevValues,
                            country: e.target.value,
                          }));
                          fetchCities(selectedCountry.code); // Pass the country code to fetchCities
                        }
                      }}
                    >
                      {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select> */}
                  </TableCell>
                </TableRow>
                {/* 
                <TableRow>
                  <TableCell>
                    <Typography>City:</Typography>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={client.city || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          city: e.target.value,
                        }));
                        setClient((prevValues) => ({
                          ...prevValues,
                          city: e.target.value,
                        }));
                      }}
                    >
                      {cities.map((city) => (
                        <MenuItem key={city.id} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
            <MDButton
              type="submit"
              variant="gradient"
              color="info"
              p={4}
              sx={{ margin: "20px", float: "right" }}
            >
              Update Client
            </MDButton>
          </MDBox>
        </TableContainer>



      </MDBox>
    </DashboardLayout>
  );
}

export default Client;
