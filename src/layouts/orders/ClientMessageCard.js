import axios from "axios";
import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function ClientMessageCard() {
  const params = useParams();
  const [value, setValue] = useState("");
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    //Get Provider list
    const fetchProviders = async () => {
      try{
        const { data } = await axios.get(`http://localhost:3000/v1/users/?role=USER`);
        console.log(data);
        setProviders(data);
      }
      catch(error){
        console.log(error);
      }
    };

    //Get Order Data
    const fetchOrder = async () => {
      const { data } = await axios.get(`http://localhost:3000/v1/orders/${params.id}`);
      console.log(data);
    };
    fetchProviders();
    //fetchOrder();
  }
  , []);

  const emailHandleSubmit = async (event) => {
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
      <Card>
        <MDBox p={3}>
          <Typography fontWeight="bold" variant="h4" color="text">
            Enviar a Proveedor la Orden # {params.id}
          </Typography>

          <MDBox className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Provider List:
            </Typography>
            <select>
              <option value="">Select a provider</option>
              {providers.map((option,index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </MDBox>

          <div className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Cost:
            </Typography>
          </div>
          <div className="labelProviderEmail">
            <Typography variant="span" fontWeight="bold" color="text">
              Ocasion:
            </Typography>

            <select>
              <option value="">Select a provider</option>
              {ocasiones.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <MDBox mt={3}>
            <ReactQuill style={editorStyle} theme="snow" value={value} onChange={setValue} />
          </MDBox>

          <MDBox mt={3} display="flex" justifyContent="flex-end">
            <MDButton
              xs={{ marginTop: "10px", float: "right" }}
              onClick={emailHandleSubmit}
              variant="gradient"
              color="info"
            >
              Send Email
            </MDButton>
          </MDBox>

        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default ClientMessageCard;
