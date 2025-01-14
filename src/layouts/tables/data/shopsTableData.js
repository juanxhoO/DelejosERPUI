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
  const [shops, setShops] = useState([]);

  const handleEdit = (id) => {
    navigate(location.pathname + "/" + id);
  };

  useEffect(() => {
    async function fetchProviders() {
      try {
        const response = await axios.get("/shops");
        setShops(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProviders();
  }, []);

  const fetchedRows = [];

  fetchedRows.push(
    ...shops.map((shop) => ({
      name: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {shop?.name}
        </MDTypography>
      ),
      address: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {shop?.url}
        </MDTypography>
      ),
      country: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {shop.country?.name}
        </MDTypography>
      ),
      city: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {shop.city?.name}
        </MDTypography>
      ),
      action: (
        <MDTypography
          onClick={() => handleEdit(shop.id)}
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
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "URL", accessor: "address", align: "center" },
      { Header: "Country", accessor: "country", align: "center" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: fetchedRows,
  };
}
