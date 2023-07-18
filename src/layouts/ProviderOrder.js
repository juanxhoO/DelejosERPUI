import axios from "axios";
import { Card, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";

function ProviderOrder() {
  const params = useParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    //Get Provider list
    const fetchProviders = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/orders/${params.id}`);
      console.log(data);
    };

    //Get Order Data
    const fetchOrder = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/orders/${params.id}`);
      console.log(data);
    };
  }, []);

  const emailHandleSubmit = async (event) => {
    console.log(value);
  };

  // Style object to add more height to the editor
  const editorStyle = {
    height: "400px", // Set the height of the editor to 400px (you can adjust this value as needed)
    padding: "10px", // Add padding for space inside the editor
    boxSizing: "border-box",
  };

  const proveedores = [
    { value: "361", label: "Aagifsell Proveedores Whatsapp" },
    { value: "121", label: "Alejandro" },
    { value: "10", label: "Ambarflores" },
    { value: "372", label: "Angol - Floreria Elis" },
    { value: "42", label: "Arco Iris" },
    { value: "292", label: "Argentina - Bahia Blanca - Floreria Look" },
    { value: "155", label: "Argentina - Bariloche -" },
    { value: "213", label: "Argentina - Bariloche - Chic" },
    { value: "120", label: "Argentina - Buenos Aires - Festilandia" },
    { value: "318", label: "Argentina - Buenos Aires - Flores Dany" },
    { value: "166", label: "Argentina - Buenos Aires - Su Flor" },
    { value: "256", label: "Argentina - Comodoro Rivadavia - Floreria El Jardin" },
    { value: "285", label: "Argentina - Comodoro Rivadavia - Floreria Santa Rita" },
    { value: "291", label: "Argentina - Concordia  - Floreria Concordia" },
    { value: "410", label: "Argentina - Cordoba - Jardin Vintage" },
    { value: "378", label: "Argentina - Cordoba - La Japonesita" },
    { value: "204", label: "Argentina - Corrientes - Floreria Tsuyu" },
    { value: "385", label: "Argentina - Florencio Varela - Floreria Navarra" },
    { value: "272", label: "Argentina - Formosa - El mundo de las Flores" },
    { value: "212", label: "Argentina - La Plata - Jazbritt Saavedra" },
    { value: "139", label: "Argentina - Mar del Plata - Jardin Holandes" },
    { value: "157", label: "Argentina - Mendoza - Floreria Carrasco" },
    { value: "128", label: "Argentina - Neuquen - Las Mutisias" },
    { value: "326", label: "Argentina - Parana - Floreria Las Marias" },
    { value: "330", label: "Argentina - Rafaela - Floreria JC" },
    { value: "290", label: "Argentina - Resistencia - Floreria Santa Rita" },
    { value: "283", label: "Argentina - Rio Cuarto - Nelly Miatello" },
    { value: "140", label: "Argentina - Rivadavia - San Juan - El mundo de las Delicias" },
    { value: "215", label: "Argentina - Rosario - FLORERIA EL CEIBO" },
    { value: "129", label: "Argentina - Rosario - FLORERIA GONZALEZ HNOS" },
    { value: "174", label: "Argentina - Rosario - Florexpress" },
    { value: "180", label: "Argentina - Rosario - Regala un Desayuno" },
    { value: "358", label: "Argentina - Salta - Floreria Ebber" },
    { value: "345", label: "Argentina - Salta - Floreria San Jorge" },
    { value: "126", label: "Argentina - Salta - Rosa del Huerto" },
    { value: "220", label: "Argentina - San Juan - Floreria Argentina" },
    { value: "122", label: "Argentina - San Lorenzo - Santa Fe - Floreria Printemps" },
    { value: "301", label: "Argentina - San Luis - La Orquidea" },
  ];

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
      <Card>
        <MDBox p={2}>
          <Typography>Enviar a Proveedor la Orden # {params.id}</Typography>
          <div className="labelProviderEmail">
            <label>Provider List</label>
            <select>
              <option value="">Select a provider</option>
              {proveedores.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="labelProviderEmail">
            <label>Cost</label>
          </div>
          <div className="labelProviderEmail">
            <label>Ocasion</label>
            <select>
              <option value="">Select a provider</option>
              {ocasiones.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <ReactQuill style={editorStyle} theme="snow" value={value} onChange={setValue} />
          <MDButton
            xs={{ marginTop: "10px", float: "right" }}
            onClick={emailHandleSubmit}
            variant="gradient"
            color="info"
          >
            Send Email
          </MDButton>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default ProviderOrder;
