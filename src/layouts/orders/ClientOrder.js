import axios from "axios";
import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ClientOrder() {
  const params = useParams();
  const status = [
    { value: "pagado", label: "En Proceso" },
    { value: "entregado", label: "Entregado" },
    { value: "devuelto", label: "Reembolsado" },
    { value: "pendiente", label: "Pendiente de pago" },
  ];

  const emailHandleSubmit = () => {
    console.log("test");
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Card>
        <MDBox p={5}>
          <Typography variant="h3" color="text">
            Send to Client
          </Typography>

          <div>
            <Typography fontWeight="bold" variant="h6" color="text">
              Order #:
            </Typography>
            <Typography>{params.id}</Typography>
          </div>

          <div>
            <Typography fontWeight="bold" variant="h6" color="text">
              Site:
            </Typography>

            <span>https://en.delejos.com/</span>
          </div>

          <div>
            <Typography fontWeight="bold" variant="h6" color="text">
              Client Status:
            </Typography>

            <select>
              {status.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Typography fontWeight="bold" variant="h6" color="text">
              Business:
            </Typography>
            <input></input>
          </div>
          <div>
            <Typography fontWeight="bold" variant="h6" color="text">
              Message:
            </Typography>

            <textarea rows={8} cols={40}></textarea>
          </div>

          <MDButton
            xs={{ marginTop: "10px", float: "right" }}
            onClick={emailHandleSubmit}
            variant="gradient"
            color="info"
          >
            Send
          </MDButton>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default ClientOrder;
