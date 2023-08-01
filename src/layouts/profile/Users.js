import { Typography } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";

function Users() {
  const columns = [
    { Header: "Nombre", accessor: "date" },
    { Header: "Usuario", accessor: "uuid" },
    { Header: "Contrasenia", accessor: "client" },
    { Header: "Tipo", accessor: "value" },
    { Header: "", accessor: "addressee" },
    { Header: "", accessor: "product" },
  ];

  const rows = [];

  return (
    <DashboardLayout>
      <MDBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Admin Users
        </Typography>
        <DataTable table={{ columns, rows }} />
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;
