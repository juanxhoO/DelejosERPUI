

import { Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CheckboxDataTable from "examples/Tables/CheckboxDataTable";
import { useEffect, useState } from "react";
function Comprobantes() {

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (rowData) => {
    const isRowSelected = selectedRows.some((row) => row.id === rowData.id);
    // If the row is already selected, remove it (deselect)
    if (isRowSelected) {
      setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((row) => row.id !== rowData.id));
    } else {
      // If the row is not selected, add it (select)
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowData]);
    }
    console.log(selectedRows);
  }

  const columns = [
    { Header: "checkbox", accessor: "checkbox" },
    { Header: "name", accessor: "name", width: "25%" },
    { Header: "position", accessor: "position" },
    { Header: "office", accessor: "office" },
    { Header: "age", accessor: "age", width: "12%" },
    { Header: "salary", accessor: "salary", width: "12%" },
    { Header: "date", accessor: "startDate", width: "12%" },
  ];

  const rows = [
    {
      name: "Hanny Baniard",
      position: "Data Coordiator",
      office: "Baorixile",
      age: 42,
      startDate: "4/11/2021",
      salary: "$474,978",
    },
    {
      name: "Lara Puleque",
      position: "Payment Adjustment Coordinator",
      office: "Cijangkar",
      age: 47,
      startDate: "8/2/2021",
      salary: "$387,287",
    },
    {
      name: "Torie Repper",
      position: "Administrative Officer",
      office: "Montpellier",
      age: 25,
      startDate: "4/21/2021",
      salary: "$94,780",
    },
    {
      name: "Nat Gair",
      position: "Help Desk Technician",
      office: "Imider",
      age: 57,
      startDate: "12/6/2020",
      salary: "$179,177",
    },
    {
      name: "Maggi Slowan",
      position: "Help Desk Technician",
      office: "Jaunpils",
      age: 56,
      startDate: "11/7/2020",
      salary: "$440,874",
    },
    {
      name: "Marleah Snipe",
      position: "Account Representative II",
      office: "Orekhovo-Borisovo Severnoye",
      age: 31,
      startDate: "7/18/2021",
      salary: "$404,983",
    },
    {
      name: "Georgia Danbury",
      position: "Professor",
      office: "Gniezno",
      age: 50,
      startDate: "10/1/2020",
      salary: "$346,576",
    },
    {
      name: "Bev Castan",
      position: "Design Engineer",
      office: "Acharnés",
      age: 19,
      startDate: "1/14/2021",
      salary: "$445,171",
    },
    {
      name: "Reggi Westney",
      position: "Financial Advisor",
      office: "Piuí",
      age: 56,
      startDate: "3/21/2021",
      salary: "$441,569",
    },
    {
      name: "Bartholomeus Prosh",
      position: "Project Manager",
      office: "Kelīshād va Sūdarjān",
      age: 28,
      startDate: "5/27/2021",
      salary: "$336,238",
    },
    {
      name: "Sheffy Feehely",
      position: "Software Consultant",
      office: "Ndibène Dahra",
      age: 27,
      startDate: "3/23/2021",
      salary: "$473,391",
    },
    {
      name: "Euphemia Chastelain",
      position: "Engineer IV",
      office: "Little Baguio",
      age: 63,
      startDate: "5/1/2021",
      salary: "$339,489",
    },
  ];
  return (

    <DashboardLayout>

      <Typography variant="h2">
        Comprobantes
      </Typography>

      <CheckboxDataTable
        table={{
          columns,
          rows
        }}
        onRowClick={handleRowClick} />

      <MDBox mt={5}>
        <MDBox>
          <Typography>
            Total:
          </Typography>
        </MDBox>

        <MDBox>
          <Typography>
            Gastos Financieros:
          </Typography>
        </MDBox>

        <MDBox>
          <Typography>
            ISD
          </Typography>
        </MDBox>

        <MDBox>
          <Typography>
            Observaciones
          </Typography>
        </MDBox>
        <Typography>

        </Typography>
        <MDButton variant="gradient" color="info" >
          Generar Comprobante
        </MDButton>
      </MDBox>
    </DashboardLayout>
  )
}

export default Comprobantes;
