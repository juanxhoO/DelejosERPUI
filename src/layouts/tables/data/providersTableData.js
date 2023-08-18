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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';

// Images

export default function data() {
  const location = useLocation();
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);

  const handleEdit = (id) => {
    navigate(location.pathname + "/" + id);
  };

  useEffect(() => {

    async function fetchProviders() {
      try{
        const response = await axios.get('http://localhost:3000/v1/users?role=USER');
        setProviders(response.data);
        console.log(response.data);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchProviders();
  }, [])


  const fetchedRows = [];

  fetchedRows.push(
    ...providers.map((provider) => ({
      name: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.name}
        </MDTypography>
      ),
      lastname: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.lastname}
        </MDTypography>
      ),
      contact: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.contact}
        </MDTypography>
      ),
      email: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.email}
        </MDTypography>
      ),
      address: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.address}
        </MDTypography>
      ),
      // country: (
      //   <MDTypography variant="caption" color="text" fontWeight="medium">
      //     {provider.country}
      //   </MDTypography>
      // ),
      city: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.city}
        </MDTypography>
      ),
      phone1: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.phone1}
        </MDTypography>
      ),
      phone2: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.phone2}
        </MDTypography>
      ),
      action: (
        <MDTypography
          onClick={() => handleEdit(provider.id)}
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    }))
  );
  return {
    columns: [
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Lastname", accessor: "lastname", align: "left" },
      { Header: "Contact", accessor: "contact", align: "center" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Address", accessor: "address", align: "center" },
      { Header: "Country", accessor: "country", align: "center" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "Phone1", accessor: "phone1", align: "center" },
      { Header: "Phone2", accessor: "phone2", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: fetchedRows,
  };
}
