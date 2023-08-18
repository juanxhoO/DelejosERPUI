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
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Provider() {
  const { id } = useParams();
  const [provider,setProvider] = useState([]);



  //Layout to show Inputs 
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
      label: "Phone Number 1",
      id: "phone1",
      type: "text",
    },
    {
      label: "Phone Number 2",
      id: "phone2",
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
      type: "textarea",
    },
  ];

  useEffect(() => {
    //Fetching Provider Data from ERP API BACKEND
    const handleProvider = async (param_id) => {
      try {
        const response = await axios.get("http://localhost:3000/v1/users/" + param_id);
        setProvider(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    // Call the handleProvider function passing the id parameter
    handleProvider(id);
  }, []);

  const submitChanges = async () => {
    try {
      console.log(provider);
      //const response = await axios.patch("http://localhost:3000/v1/users/" + id, provider);
      //console.log(response);

      setProvider(response.data);
    } catch (error) {
      console.log(error);
    }
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
                      {row.type === 'textarea' ? (
                        <TextareaAutosize
                          minRows={7}
                          value={provider[row.id] || ""}
                          onChange={(e) => {
                            setProvider((prevValues) => ({
                              ...prevValues,
                              [row.id]: e.target.value,
                            }));
                          }}
                        />
                      ) : (
                        <MDInput
                          variant="outlined"
                          label={row.label}
                          value={provider[row.id] || ""}
                          onChange={(e) => {
                            setProvider((prevValues) => ({
                              ...prevValues,
                              [row.id]: e.target.value,
                            }));
                          }}
                        />
                      )}
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
