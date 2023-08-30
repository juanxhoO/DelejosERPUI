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
import {
  FormControl,
  MenuItem,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
  getCardUtilityClass,
} from "@mui/material";
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
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputLabel from "@mui/material/InputLabel";

function CreateProvider() {
  const { id } = useParams();
  const [inputValues, setInputValues] = useState({});
  const [countries, setCountries] = useState([]);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

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
      const response = await axios.post("http://localhost:3000/v1/auth/register", inputValues, {
        withCredentials: false,
      });
      console.log(response.data);
      //navigate("/providers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <MDBox>
        <p>Provider {id}</p>
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
                      required
                      variant="outlined"
                      label="name"
                      value={inputValues["name"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
                      value={inputValues["lastname"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          lastname: e.target.value,
                        }));
                      }}
                    ></MDInput>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Contact</Typography>
                  </TableCell>
                  <TableCell>
                    <MDInput
                      variant="outlined"
                      label="Contact"
                      value={inputValues["contact"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
                          ...prevValues,
                          contact: e.target.value,
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
                      required
                      variant="outlined"
                      label="Password"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
                      variant="outlined"
                      label="Address"
                      value={inputValues["address"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
                      value={inputValues["phone"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
                      onBlur={() => setEmailFocus(false)}
                      onFocus={() => setEmailFocus(true)}
                      required
                      variant="outlined"
                      label="Email"
                      value={inputValues["email"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
                    <FormControl sx={{ minWidth: 220 }}>
                      <InputLabel id="country-label">Select Country</InputLabel>
                      <Select
                        labelId="country-label"
                        label="Country"
                        value={inputValues["country"] || ""}
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
                            fetchCities(selectedCountry.code); // Pass the country code to fetchCities
                          }
                        }}
                      >
                        {countries.map((country) => (
                          <MenuItem key={country.code} value={country.name}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>City:</Typography>
                  </TableCell>
                  <TableCell>

                    <FormControl sx={{ minWidth: 220 }}>
                      <InputLabel id="city-label">Select City</InputLabel>
                      <Select
                        labelId="city-label"
                        label="City"
                        value={inputValues["city"] || ""}
                        onChange={(e) => {
                          setInputValues((prevValues) => ({
                            ...prevValues,
                            city: e.target.value,
                          }));
                        }}
                      >
                        {cities.map((city) => (
                          <MenuItem key={city.id} value={getCardUtilityClass.name}>
                            {city.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Observations:</Typography>
                  </TableCell>
                  <TableCell>
                    <TextareaAutosize
                      minRows={7}
                      value={inputValues["observations"] || ""}
                      onChange={(e) => {
                        setInputValues((prevValues) => ({
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
              Create Provider
            </MDButton>
          </MDBox>
        </TableContainer>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateProvider;
