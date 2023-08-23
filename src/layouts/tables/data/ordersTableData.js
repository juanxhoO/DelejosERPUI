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
import { useNavigate } from "react-router-dom";
// Images
import { useEffect, useState } from "react";
import axios from "config/axios";

export default function data() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    //Getting all Orders
    const FetchOrders = async () => {
      try {
        const response = await axios.get("/v1/orders");
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error");
      }
    };
    FetchOrders();
  }, []);

  const handleEdit = (order_number) => {
    navigate("/orders/" + order_number + "/client-chat");
  };

  // const orders = [
  //   {
  //     order_number: "12331",
  //     ref: "323233",
  //     delivery_date: "12/12/2021",
  //     country: "Mexico",
  //     arreglo: "No",
  //     invoice_name: "Juan Perez",
  //     send_to: "Juan Perez",
  //     status: "Pending",
  //     phone: "555555555",
  //     languaje: "English",
  //     site: "www.delejos.com.en",
  //     total: "$100",
  //     provider_status: "Pending",
  //     provider_message: "Pending",id
  //   },
  // ];

  const fetchedRows = [];

  fetchedRows.push(
    ...orders.map((item) => ({
      order_number: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {item.id}
        </MDTypography>
      ),
      ref: (
        <MDTypography variant="caption" color="text" fontWeight="medium">
          {item.ref}
        </MDTypography>
      ),
      delivery_date: (
        <MDBox ml={-1}>
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {item.delivery_date}
          </MDTypography>
        </MDBox>
      ),
      country: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.country}
        </MDTypography>
      ),
      arreglo: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.arreglo}
        </MDTypography>
      ),
      invoice_name: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.invoice_name}
        </MDTypography>
      ),
      send_to: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.send_to}
        </MDTypography>
      ),
      status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.status}
        </MDTypography>
      ),
      phone: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.phone}
        </MDTypography>
      ),
      languaje: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.languaje}
        </MDTypography>
      ),
      site: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.site}
        </MDTypography>
      ),
      total: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.total}
        </MDTypography>
      ),
      status_provider: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.status_provider}
        </MDTypography>
      ),
      provider_status: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.provider_status}
        </MDTypography>
      ),
      provider_message: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {item.provider_message}
        </MDTypography>
      ),
      action_client: (
        <MDTypography
          onClick={() => navigate("/orders/" + item.id + "/client-chat/")}
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
          onClick={() => navigate("/orders/" + item.id + "/provider-chat/")}
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
