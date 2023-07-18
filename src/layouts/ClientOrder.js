import axios from "axios";
import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";

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
      <Card>
        <MDBox p={2}>
          <Typography variant="h2" color="text">
            Send to Client
          </Typography>

          <div>
            <span>Order #</span>
            <span>{params.id}</span>
          </div>

          <div>
            <span>Site:</span>
            <span>https://en.delejos.com/</span>
          </div>

          <div>
            <span>Client Status</span>

            <select>
              {status.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span>Business</span>
            <input></input>
          </div>

          <div>
            <span>Message</span>
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
