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
import { TableBody, TableContainer, TableRow, Typography, FormControl } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import MDInput from "components/MDInput";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Provider() {
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({});
  const [countries, setCountries] = useState([]);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [provider, setProvider] = useState([]);
  const [cities, setCities] = useState([]);
  const [changedProvider, setChangedProvider] = useState({});
  const PWD_REGEX = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Check Password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(inputValues.password));
  }, [inputValues.password]);

  //Check Email
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(inputValues.email));
  }, [inputValues.email]);

  useEffect(() => {
    //Fetch Provider

    async function fetchProvider() {
      try {
        const response = await axios.get("http://localhost:3000/v1/users/" + id);
        setProvider(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    //Fetching Countries
    async function fetchCountries() {
      try {
        const response = await axios.get("http://localhost:3000/v1/countries");
        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    // Call the handleProvider function passing the id parameter
    fetchCountries();
    fetchProvider();
  }, []);

  const fetchCities = async function (countryCode) {
    try {
      const response = await axios.get(
        "http://localhost:3000/v1/countries/" + countryCode + "/cities"
      );
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitChanges = async (e) => {
    e.preventDefault();
    console.log(inputValues);
    try {
      const response = await axios.patch("http://localhost:3000/v1/users/" + id, inputValues, {
        withCredentials: false,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>

        <TableContainer>

          <MDBox onSubmit={submitChanges} component="form" p={4}>
            <Typography variant="h3">Provider {id}</Typography>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Name</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      type="text"
                      variant="outlined"
                      label="name"
                      value={provider.name || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          name: e.target.value,
                        }));
                        setProvider((prevValues) => ({
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
                      type="text"
                      variant="outlined"
                      label="lastname"
                      value={provider.lastname || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          lastname: e.target.value,
                        }));
                        setProvider((prevValues) => ({
                          ...prevValues,
                          lastname: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Password</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                    type="password"
                      variant="outlined"
                      label="Password"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          password: e.target.value,
                        }));
                        setProvider((prevValues) => ({
                          ...prevValues,
                          password: e.target.value,
                        }));
                      }}
                    ></MDInput>
                    <p
                      id="pwdnote"
                      className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                    >
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, and a number.
                      <br />
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Address</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                    type="text"
                      variant="outlined"
                      label="Address"
                      value={provider.address || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          address: e.target.value,
                        }));
                        setProvider((prevValues) => ({
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
                    type="tel"
                      variant="outlined"
                      label="Phone"
                      value={provider.phone || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          phone: e.target.value,
                        }));
                        setProvider((prevValues) => ({
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
                    type="email"
                      onBlur={() => setEmailFocus(false)}
                      onFocus={() => setEmailFocus(true)}
                      variant="outlined"
                      label="Email"
                      value={provider.email || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          email: e.target.value,
                        }));
                        setProvider((prevValues) => ({
                          ...prevValues,
                          email: e.target.value,
                        }));
                      }}
                    ></MDInput>
                    <p
                      id="emailnote"
                      className={emailFocus && !validEmail ? "instructions" : "offscreen"}
                    >
                      Invalid Email Format.
                      <br />
                    </p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Country</Typography>
                  </TableCell>
                  <TableCell>
                      <select
                        value={provider.country?.name}
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
                            setProvider((prevValues) => ({
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
                      </select>

                  </TableCell>
                </TableRow>

                {/* <TableRow>
                  <TableCell>
                    <Typography>City:</Typography>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={provider.city || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          city: e.target.value,
                        }));
                        setProvider((prevValues) => ({
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

                <TableRow>
                  <TableCell>
                    <Typography>Observations:</Typography>
                  </TableCell>
                  <TableCell>
                    <TextareaAutosize
                      minRows={7}
                      value={provider.observations || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          observations: e.target.value,
                        }));
                        setProvider((prevValues) => ({
                          ...prevValues,
                          observations: e.target.value,
                        }));
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <MDButton
              type="submit"
              variant="gradient"
              color="info"
              p={4}
              sx={{ margin: "20px", float: "right" }}
            >
              Update Provider
            </MDButton>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default Provider;