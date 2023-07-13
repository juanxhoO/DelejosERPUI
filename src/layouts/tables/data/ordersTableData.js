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

export default function data() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);
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

  return {
    columns: [
      { Header: "order#", accessor: "author", width: "45%", align: "left" },
      { Header: "REF", accessor: "function", align: "left" },
      { Header: "Delivery Date", accessor: "status", align: "center" },
      { Header: "country", accessor: "country", align: "center" },
      { Header: "Arreglo", accessor: "city", align: "center" },
      { Header: "Invoice Name", accessor: "email", align: "center" },
      { Header: "Send To", accessor: "clave", align: "center" },
      { Header: "Status", accessor: "telefono1", align: "center" },
      { Header: "Site", accessor: "telefono2", align: "center" },
      { Header: "Languaje", accessor: "action", align: "center" },
      { Header: "Total Order", accessor: "action", align: "center" },
      { Header: "Status Provider", accessor: "action", align: "center" },
      { Header: "Provider", accessor: "action", align: "center" },
      { Header: "Client", accessor: "action", align: "center" },
      { Header: "Invoice", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Provider image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
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
      },
    ],
  };
}
