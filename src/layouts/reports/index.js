import { InputLabel, Select, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InvertedTable from "examples/Tables/DataTable/InvertedTable";

function Reportes() {
  const [endDate, setEndDate] = useState(dayjs("2022-04-17T15:30"));
  const [initialDate, setInitialDate] = useState(dayjs("2022-04-17T15:30"));
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("Select Provider");

  const countries = [
    {
      name: "Colombia",
      code: "CO",
    },
    {
      name: "United States",
      code: "US",
    },
    {
      name: "Canada",
      code: "CA",
    },
    {
      name: "United Kingdom",
      code: "GB",
    },
    {
      name: "Australia",
      code: "AU",
    },
    {
      name: "Germany",
      code: "DE",
    },
  ];

  const providers = [
    {
      id: "12332",
      name: "Proveedor Flores De Mar",
    },
    {
      id: "98765",
      name: "Supplier Green Gardens",
    },
    {
      id: "45678",
      name: "Eco-Friendly Suppliers",
    },
    {
      id: "56789",
      name: "Blooming Blossoms Co.",
    },
    // Add more provider objects as needed
  ];

  useEffect(() => {
    //Fecth Providers
    //Fetch Countries
  });

  const handleSubmit = () => {
    console.log("dsds");
  };

  const columns = [
    { Header: "Date", accessor: "date", width: "25%" },
    { Header: "Order", accessor: "uuid" },
    { Header: "Client", accessor: "client" },
    { Header: "Value", accessor: "value", width: "12%" },
    { Header: "Addressee", accessor: "addressee", width: "12%" },
    { Header: "Product", accessor: "product", width: "12%" },
    { Header: "Delivery Date", accessor: "delivery_date", width: "12%" },
  ];

  const rows = [
    {
      date: "12/12/2021",
      uuid: "0bcb741c-2b14-11ee-be56-0242ac120002",
      client: "Juan Granja",
      value: 125.23,
      addressee: "Jhoana Barrionuevo",
      product: "Vino espumoso, caja de chocolates y ramo de flores",
      delivery_date: "12/12/2021",
    },
    {
      date: "02/05/2022",
      uuid: "1b9ff1aa-2b14-11ee-be56-0242ac120002",
      client: "Maria Lopez",
      value: 75.5,
      addressee: "Carlos Ramirez",
      product: "Gift basket and greeting card",
      delivery_date: "02/06/2022",
    },
    {
      date: "07/20/2022",
      uuid: "3ac7f8c6-2b14-11ee-be56-0242ac120002",
      client: "John Smith",
      value: 99.99,
      addressee: "Emma Johnson",
      product: "Bouquet of roses",
      delivery_date: "07/22/2022",
    },
    {
      date: "11/11/2022",
      uuid: "4f064f9e-2b14-11ee-be56-0242ac120002",
      client: "Robert Brown",
      value: 45.75,
      addressee: "Jennifer Davis",
      product: "Chocolates and teddy bear",
      delivery_date: "11/13/2022",
    },
    {
      date: "04/30/2023",
      uuid: "6974c7c4-2b14-11ee-be56-0242ac120002",
      client: "Sarah Johnson",
      value: 150.0,
      addressee: "Michael Williams",
      product: "Customized gift box",
      delivery_date: "05/02/2023",
    },
    {
      date: "09/15/2023",
      uuid: "7db3e43e-2b14-11ee-be56-0242ac120002",
      client: "Laura Martinez",
      value: 68.9,
      addressee: "David Thompson",
      product: "Assorted sweets and balloons",
      delivery_date: "09/17/2023",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={3}>
        <MDBox>
          <Typography fontWeight="bold" variant="span">
            From:
          </Typography>
          <DatePicker
            label="Initial Date"
            value={initialDate}
            onChange={(newValue) => setInitialDate(newValue)}
          />
        </MDBox>

        <MDBox mt={3}>
          <MDBox>
            <Typography fontWeight="bold" variant="span">
              To:
            </Typography>

            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
            />
          </MDBox>
        </MDBox>

        <MDBox mt={3}>
          <Typography fontWeight="bold" variant="span">
            Pais:
          </Typography>

          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            value={selectedCountry}
            onChange={(val) => setSelectedCountry(val.target.value)}
            label="Country"
            labelId="country-select-label"
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </MDBox>

        <MDBox mb={3} mt={3}>
          <Typography fontWeight="bold" variant="span">
            Proveedor
          </Typography>
          <InputLabel id="provider-select-label">Provider</InputLabel>

          <Select
            value={selectedProvider}
            onChange={(val) => setSelectedProvider(val.target.value)}
            label="Provider"
            labelId="provider-select-label"
          >
            {providers.map((provider) => (
              <MenuItem key={provider.id} value={provider.name}>
                {provider.name}
              </MenuItem>
            ))}
          </Select>
        </MDBox>
        <MDButton variant="gradient" color="info" onClick={handleSubmit}>
          Show Report
        </MDButton>
      </MDBox>

      <Paper>
        <InvertedTable table={{ columns, rows }} />
      </Paper>
    </DashboardLayout>
  );
}

export default Reportes;
