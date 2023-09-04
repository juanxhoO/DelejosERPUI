/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";
import axios from "config/axios";
import { useNavigate } from "react-router-dom";
import PhonesTooltip from "components/PhonesTooltip";

export default function data() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  
  const  fetchData = async function() {
    try {
      const response = await axios.get("/clients");
      setClients(response.data);   
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    console.log("edit");
    navigate("/clients/" + id );
  }

  const fetchedRows = [];

  fetchedRows.push(
    ...clients.map((client) => ({
      name: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {client.name} {client.lastname}
        </MDTypography>
      ),
      email: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {client.email}
        </MDTypography>
      ),
      address: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {client.address}
        </MDTypography>
      ),
      country: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {client.country?.name || ""}
        </MDTypography>
      ),
      phone: (
          <PhonesTooltip phones={client?.phones}/>
      ),
      city: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {client.city?.name || ""}
        </MDTypography>
      ),

      action: (
        <MDTypography
          onClick={() => handleEdit(client.id)}
          component="a"
          href="#"
          variant="caption"
          color="info"
          fontWeight="medium"
        >
          View
        </MDTypography>
      ),
    }))
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", align: "center" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Address", accessor: "address", align: "center" },
      { Header: "Country", accessor: "country", align: "center" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "Phones", accessor: "phone", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: fetchedRows,
  };
}
