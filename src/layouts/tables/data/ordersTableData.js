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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useLocation, useNavigate } from "react-router-dom";
// Images
import team2 from "assets/images/team-2.jpg";
import { useEffect } from "react";

import axios from "axios";

export default function data() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = axios.get();
        console.log(response);

        if (response.status === 200) {
          console.log("success");
          const data = response.data;
          console.log(data);
        }
      } catch (error) {
        console.log("error");
      }
    };
  }, []);

  const Provider = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const handleEdit = () => {
    navigate(location.pathname + "/" + 1);
  };

  const orders = [
    {
      order_number: "12331",
      ref: "323233",
      delivery_date: "12/12/2021",
      country: "Mexico",
      arreglo: "No",
      invoice_name: "Juan Perez",
      send_to: "Juan Perez",
      status: "Pending",
      phone: "555555555",
      languaje: "English",
      site: "www.delejos.com.en",
      total: "$100",
      provider_status: "Pending",
      provider_message: "Pending",
    },
    {
      order_number: "11223",
      ref: "445566",
      delivery_date: "05/20/2022",
      country: "Canada",
      arreglo: "Yes",
      invoice_name: "Emily Brown",
      send_to: "David Lee",
      status: "Processing",
      phone: "666666666",
      languaje: "French",
      site: "www.shopnow.ca",
      total: "$150",
      provider_status: "Completed",
      provider_message: "Shipped via express delivery",
    },
    {
      order_number: "54321",
      ref: "987654",
      delivery_date: "01/01/2022",
      country: "United States",
      arreglo: "Yes",
      invoice_name: "John Smith",
      send_to: "Alice Johnson",
      status: "Completed",
      phone: "444444444",
      languaje: "Spanish",
      site: "www.example.com",
      total: "$75",
      provider_status: "Processing",
      provider_message: "Items out of stock",
    },
  ];
  const fetchedRows = [];

  fetchedRows.push(
    ...orders.map((item) => ({
      order_number: <Provider image={team2} name="John Michael" email="john@creative-tim.com" />,
      ref: <Job title="Manager" description="Organization" />,
      delivery_date: (
        <MDBox ml={-1}>
          <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
        </MDBox>
      ),
      country: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      arreglo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      invoice_name: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      send_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      phone: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      languaje: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      site: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      total: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      status_provider: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      provider_status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      provider_message: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          23/04/18
        </MDTypography>
      ),
      action_invoice: (
        <MDTypography
          onClick={handleEdit}
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="2medium"
        >
          Edit
        </MDTypography>
      ),
      action_client: (
        <MDTypography
          onClick={handleEdit}
          component="a"
          href="#"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          Edit
        </MDTypography>
      ),
      action_provider: (
        <MDTypography
          onClick={handleEdit}
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
      { Header: "order#", accessor: "order_number", width: "45%", align: "left" },
      { Header: "REF", accessor: "ref", align: "left" },
      { Header: "Delivery Date", accessor: "delivery_date", align: "center" },
      { Header: "country", accessor: "country", align: "center" },
      { Header: "Arreglo", accessor: "arreglo", align: "center" },
      { Header: "Invoice Name", accessor: "invoice_name", align: "center" },
      { Header: "Send To", accessor: "send_to", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Phone", accessor: "phone", align: "center" },
      { Header: "Languaje", accessor: "languaje", align: "center" },
      { Header: "Site", accessor: "site", align: "center" },
      { Header: "Total", accessor: "total", align: "center" },
      { Header: "Provider Status", accessor: "provider_status", align: "center" },
      { Header: "Provider Message", accessor: "provider_message", align: "center" },
      { Header: "Provider", accessor: "action_provider", align: "center" },
      { Header: "Client", accessor: "action_client", align: "center" },
      { Header: "Invoice", accessor: "action_invoice", align: "center" },
    ],
    rows: fetchedRows,
  };
}
