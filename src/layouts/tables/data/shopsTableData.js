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
import axios from "axios";

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
        const response = await axios.get("http://localhost:3000/v1/shops");
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
          {shop.name}
        </MDTypography>
      ),
    //   address: (
    //     <MDTypography variant="caption" color="text" fontWeight="medium">
    //       {provider.address}
    //     </MDTypography>
    //   ),
    //   city: (
    //     <MDTypography variant="caption" color="text" fontWeight="medium">
    //       {provider.city}
    //     </MDTypography>
    //   ),
      action: (
        <MDTypography
          onClick={() => handleEdit(shop.id)}
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
