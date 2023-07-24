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
// Images

export default function data() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(location.pathname + "/" + id);
  };

  const providers = [
    {
      id: "cfc81b06-fd5a-4af3-b08f-cfd5489b7a26",
      name: "John",
      lastname: "Wick",
      contact: "281929102",
      email: "jhonw@gmail.com",
      address: "washington avenue 232",
      country: "USA",
      city: "California",
      phone1: "232143232",
      phone2: "382919283",
    },
    {
      id: "f1a1e9b9-7e2d-4e4b-9154-2b91e038d185",
      name: "Alice",
      lastname: "Johnson",
      contact: "392849283",
      email: "alicej@example.com",
      address: "Elm Street 123",
      country: "Canada",
      city: "Toronto",
      phone1: "293847293",
      phone2: "819283910",
    },
    {
      id: "8e11d97e-7a46-43ab-b5f0-82a6143e0a0c",
      name: "Michael",
      lastname: "Smith",
      contact: "483729183",
      email: "michaels@example.com",
      address: "Broadway 456",
      country: "United Kingdom",
      city: "London",
      phone1: "736281927",
      phone2: "392819283",
    },
    {
      id: "4b8bf623-c90e-4530-a36d-27167bb42103",
      name: "Emily",
      lastname: "Davis",
      contact: "981726392",
      email: "emilyd@example.com",
      address: "Boulevard 789",
      country: "France",
      city: "Paris",
      phone1: "648172938",
      phone2: "192837465",
    },
  ];

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
      country: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {provider.country}
        </MDTypography>
      ),
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
      { Header: "Name", accessor: "name", width: "45%", align: "left" },
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
