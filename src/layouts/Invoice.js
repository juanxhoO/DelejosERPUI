import axios from "axios";
import { Card } from "@mui/material";
import MDBox from "components/MDBox";

function Invoice() {
  return (
    <Card>
      <MDBox p={2}>
        <h1>Invoice</h1>
      </MDBox>
    </Card>
  );
}

export default Invoice;
