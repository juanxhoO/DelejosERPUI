import axios from "axios";
import { Card, TextareaAutosize, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "./MDButton";

function MessageFrame() {
  const params = useParams();
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //Get Conversation
    const fetchMessages = async () => {
      const response = await axios.get(`http://localhost:8000/v1/messages/`);
      console.log(data);
    };
  }, []);

  const sendMessage = async () => {
    try {
      const response = await axios.post("");
    } catch (error) {}
  };

  const messages_putty = [
    {
      provider: "Rosas y Detalles",

      content:
        "Hola por favor de esta orden necesito pasarles una foto del regalo antes de la entrega, me puedes pasar mañana??",
    },
  ];

  return (
    <MDBox mb={8}>
      <Card>
        <Typography variant="h3">Messages</Typography>
        {/* Show MEssages */}
        <MDBox className="MessagesContainer">
          <Card>
            <MDBox>
              <Typography>dsdsdsd</Typography>
            </MDBox>
          </Card>
        </MDBox>
        <MDBox p={3}>
          <MDBox onSubmit={sendMessage} component="form">
            <TextareaAutosize style={{ minWidth: "320px" }} minRows={8} />
            <MDButton>Send Message</MDButton>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
}

export default MessageFrame;