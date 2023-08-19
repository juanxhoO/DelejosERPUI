import { Select, MenuItem, Typography, InputLabel } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import CheckboxDataTable from "examples/Tables/CheckboxDataTable";
import { useContext, useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TextareaAutosize } from "@mui/material";
import Paper from "@mui/material/Paper";
import DataContext from "context/DataProvider";

function Comprobantes() {
  const [selectedRows, setSelectedRows] = useState([]);
  const { sharedData, setSharedData } = useContext(DataContext);

  const handleRowClick = (rowData) => {
    const isRowSelected = selectedRows.some((row) => row.id === rowData.id);
    // If the row is already selected, remove it (deselect)
    if (isRowSelected) {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((row) => row.id !== rowData.id)
      );
    } else {
      // If the row is not selected, add it (select)
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowData]);
    }
    console.log(selectedRows);
  };

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

  const [startDate, setStartDate] = useState(dayjs("2022-04-17T15:30"));
  const [endDate, setEndDate] = useState(dayjs("2022-04-17T15:30"));
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setSharedData({ id: 7 });
    console.log(sharedData);
  };
  return (
    <DashboardLayout>
      <MDBox mt={5}>
        <Typography variant="h2">Comprobantes</Typography>
        <MDBox display="inline-block" width="50%" mt={3}>
          <Typography fontWeight="bold">Status:</Typography>

          <InputLabel id="status-select-label">Status</InputLabel>
          <Select labelId="status-select-label" label="Status" value="" onChange={2}>
            <MenuItem value="none">
              <em>Without Receipt</em>
            </MenuItem>
            <MenuItem value="pending">
              <em>Pending</em>
            </MenuItem>
            <MenuItem value="paid">
              <em>Paid</em>
            </MenuItem>
            <MenuItem value="aborted">
              <em>Aborted</em>
            </MenuItem>
          </Select>
        </MDBox>

        <MDBox display="inline-block" width="50%" mt={3}>
          <Typography fontWeight="bold">Country:</Typography>

          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            value="Ecuador"
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

        <MDBox display="inline-block" width="50%" mt={3}>
          <Typography fontWeight="bold">Provider:</Typography>

          <InputLabel id="country-select-label">Provider</InputLabel>
          <Select
            labelId="country-select-label"
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

        <MDBox display="inline-block" width="50%" mt={3}>
          <Typography fontWeight="bold">Receipts:</Typography>

          <InputLabel id="receipts-select-label">Receipts</InputLabel>
          <Select value={2} onChange={2} label="Receipts" labelId="receipts-select-label">
            <MenuItem value="yes">
              <em>Yes</em>
            </MenuItem>
            <MenuItem value="no">
              <em>No</em>
            </MenuItem>
          </Select>
        </MDBox>

        <MDBox mt={3}>
          <DatePicker
            views={["year", "month"]}
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
          />
        </MDBox>
        <MDBox mt={3}>
          <DatePicker
            views={["year", "month"]}
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
          />
        </MDBox>

        <MDButton onClick={handleChange} variant="gradient" color="info" sx={{ marginTop: "20px" }}>
          Show
        </MDButton>

        <MDBox mt={5}>
          <CheckboxDataTable
            table={{
              columns,
              rows,
            }}
            onRowClick={handleRowClick}
          />
        </MDBox>

        <Paper elevation={3} sx={{ p: 2, mt: 5 }}>
          <MDBox mt={3}>
            <Typography fontWeight="bold">Total:</Typography>
          </MDBox>

          <MDBox mt={3}>
            <Typography fontWeight="bold">Gastos Financieros:</Typography>
          </MDBox>

          <MDBox mt={3}>
            <Typography fontWeight="bold">ISD:</Typography>
          </MDBox>

          <MDBox mt={3}>
            <Typography fontWeight="bold">Observaciones:</Typography>

            <TextareaAutosize
              xs={{ borderRadius: "5px" }}
              minRows={3}
              maxRows={5}
              style={{ width: "320px" }}
            />
          </MDBox>

          <MDButton xs={{ marginTop: "20px", padding: "10px" }} variant="gradient" color="info">
            Generar Comprobante
          </MDButton>
        </Paper>
      </MDBox>
    </DashboardLayout>
  );
}

export default Comprobantes;
