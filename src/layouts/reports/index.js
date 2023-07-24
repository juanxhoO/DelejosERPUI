import { Select, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MenuItem from "@mui/material/MenuItem";

function Reportes() {
  const [endDate, setEndDate] = useState(dayjs("2022-04-17T15:30"));
  const [initialDate, setInitialDate] = useState(dayjs("2022-04-17T15:30"));
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("");

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
          <Select
            value={selectedCountry}
            onChange={(val) => setSelectedCountry(val.target.value)}
            label="Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </MDBox>

        <MDBox mt={3}>
          <Typography fontWeight="bold" variant="span">
            Proveedor
          </Typography>
          <Select
            value={selectedCountry}
            onChange={(val) => setSelectedCountry(val.target.value)}
            label="Country"
          >
            {providers.map((provider) => (
              <MenuItem key={provider.id} value={provider.name}>
                {provider.name}
              </MenuItem>
            ))}
          </Select>
        </MDBox>

        <MDButton onClick={handleSubmit}>Show Report</MDButton>
      </MDBox>
    </DashboardLayout>
  );
}

export default Reportes;
