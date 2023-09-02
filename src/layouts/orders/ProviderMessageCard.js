import axios from "axios";
import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDInput from "components/MDInput";
import MessageFrame from "components/MessageFrame";
import { Height } from "@mui/icons-material";

function ProviderMessageCard() {
  const params = useParams();
  const [value, setValue] = useState("");
  const [order, setOrder] = useState({});
  const [providers, setProviders] = useState([]);
  const [orderCost, setOrderCost] = useState(0);

  useEffect(() => {
    //Get Provider list
    const fetchProviders = async () => {
      const response = await axios.get("http://localhost:3000/v1/users?role=USER");
      setProviders(response.data);
      console.log(response.data);
    };

    fetchProviders();
    //Get Order Data
    const fetchOrder = async () => {
      const response = await axios.get(`http://localhost:3000/v1/orders/${params.id}`);
      console.log(data);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(value);
  };

  // Style object to add more height to the editor
  const editorStyle = {
    boxSizing: "border-box",
  };

  const ocasiones = [
    { value: "cumpleanos", label: "Cumpleaños" },
    { value: "amor", label: "Amor" },
    { value: "condolencias", label: "Condolencias" },
    { value: "amistad", label: "Amistad" },
    { value: "aniversario", label: "Aniversario" },
    { value: "felicitaciones", label: "Felicitaciones" },
    { value: "afecto", label: "Afecto" },
    { value: "valentin", label: "San Valentín" },
    { value: "dia_madre", label: "Día de la madre" },
    { value: "navidad", label: "Navidad" },
    { value: "mejorate", label: "Mejórate" },
    { value: "dia_padre", label: "Día del padre" },
    { value: "dia_mujer", label: "Día de la mujer" },
    { value: "nacimiento", label: "Nacimiento" },
    { value: "otro", label: "Otro" },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MessageFrame />

      <Card>
        <MDBox onSubmit={handleSubmit} component="form" p={3}>
          <Typography fontWeight="bold" variant="h4" color="text">
            Enviar a Proveedor
          </Typography>

          <MDBox className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Provider List:
            </Typography>
            <select>
              <option value="">Select a provider</option>
              {providers.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </MDBox>

          <div className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Cost:
            </Typography>
            <MDInput variant="outlined" type="number" placeholder="00.00" label="Cost"></MDInput>
          </div>
          <div className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Ocasion:
            </Typography>

            <select>
              <option value="">Select a provider</option>
              {providers.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <MDBox>
            <ReactQuill style={editorStyle} value={value} onChange={setValue} />
          </MDBox>

          <MDBox mt={3} display="flex" justifyContent="flex-end">
            <MDButton
              xs={{ display: "block", marginTop: "10px", float: "right" }}
              variant="gradient"
              color="info"
              type="submit"
            >
              Send
            </MDButton>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default ProviderMessageCard;
