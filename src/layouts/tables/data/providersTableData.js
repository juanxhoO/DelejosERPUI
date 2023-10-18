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
import { useEffect, useState } from "react";
import axios from "config/axios";

// Images

export default function data() {
  const location = useLocation();
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);

  const handleEdit = (id) => {
    navigate(location.pathname + "/" + id);
  };

  const fetchProviders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/v1/users?role=PROVIDER");
      setProviders(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchedRows = [];

  fetchedRows.push(
    ...providers.map((provider) => ({
      shop: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.shop?.name || ""}
        </MDTypography>
      ),
      name: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.name}
        </MDTypography>
      ),
      lastname: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.lastname}
        </MDTypography>
      ),
      email: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.email}
        </MDTypography>
      ),
      address: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.address || ""}
        </MDTypography>
      ),
      country: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.country?.name || ""}
        </MDTypography>
      ),
      city: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider?.city?.name || ""}
        </MDTypography>
      ),
      phones: (
        <MDTypography
          onClick={() => handleEdit(provider.id)}
          href="#"
          component="a"
          variant="caption"
          color="info"
          fontWeight="medium"
        >
          View
        </MDTypography>
      ),
      action: (
        <MDTypography
          onClick={() => handleEdit(provider.id)}
          href="#"
          component="a"
          variant="caption"
          color="info"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
    }))
  );
  return {
    columns: [
      { Header: "Shop", accessor: "shop", align: "center" },
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Lastname", accessor: "lastname", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Address", accessor: "address", align: "center" },
      { Header: "Country", accessor: "country", align: "center" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "Phones", accessor: "phones", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: fetchedRows,
  };
}
