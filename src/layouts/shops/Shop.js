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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import axios from "config/axios";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { TableContainer, Table, TableRow, TableBody, TableCell } from "@mui/material";
import MDInput from "components/MDInput";
import { Typography } from "@mui/material";

function Shop() {

  const { shop, setShop } = useState({});
  const {inputValues,setInputValues} = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchShop(id);
  }, []);

  const submitChanges = async function (e) {

    e.preventDefault();
    console.log(inputValues);
    console.log(shop);
  }

  async function fetchShop(id) {
    try {
      const response = await axios.get(`http://localhost:3000/v1/shops/` + id);
      console.log(response.data);
      setShop(response.data);
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <DashboardLayout>
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
                    value={shop.name || ""}
                    onChange={(e) => {
                      setInputValues((prevValues) => ({
                        ...prevValues,
                        name: e.target.value,
                      }));
                      setShop((prevValues) => ({
                        ...prevValues,
                        name: e.target.value,
                      }));
                    }}
                  ></MDInput>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Typography>URL</Typography>
                </TableCell>
                <TableCell>
                  <MDInput

                    variant="outlined"
                    label="lastname"
                    value={shop.url || ""}
                    onChange={(e) => {
                      setInputValues((prevValues) => ({
                        ...prevValues,
                        lastname: e.target.value,
                      }));
                      setShop((prevValues) => ({
                        ...prevValues,
                        lastname: e.target.value,
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
                  <MDInput

                    variant="outlined"
                    label="Contact"
                    value={shop.country || ""}
                    onChange={(e) => {
                      setInputValues((prevValues) => ({
                        ...prevValues,
                        contact: e.target.value,
                      }));

                      setShop((prevValues) => ({
                        ...prevValues,
                        contact: e.target.value,
                      }));
                    }}
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
                    label="Password"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    onChange={(e) => {
                      setInputValues((prevValues) => ({
                        ...prevValues,
                        password: e.target.value,
                      }));
                      setShop((prevValues) => ({
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
    </DashboardLayout>
  );
}

export default Shop;
