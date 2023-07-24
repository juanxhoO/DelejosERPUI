import { TextField, Typography } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useEffect, useState } from "react";

function ChangePassword() {
  const [error, setError] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    setValidMatch(formData.newPassword === formData.confirmNewPassword);
  }, [formData.newPassword, formData.confirmNewPassword]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log(formData);

    try {
      const { data } = await axios.post("http://localhost:3001/api/user/changePassword", req);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <MDBox>
        <Typography variant="h2">Cambiar contraseña</Typography>

        <MDBox>
          <Typography component="span">Escriba su contraseña actual:</Typography>
          <TextField
            sx={{ display: "block" }}
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            type="password"
            variant="outlined"
          />
        </MDBox>

        <MDBox>
          <Typography component="span">Escriba su nueva contraseña:</Typography>
          <TextField
            sx={{ display: "block" }}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            type="password"
            variant="outlined"
          />
        </MDBox>

        <MDBox>
          <Typography component="span">Confirme su nueva contraseña:</Typography>
          <TextField
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            sx={{ display: "block" }}
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            required
            type="password"
            variant="outlined"
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            Must match the first password input field.
          </p>
        </MDBox>

        <MDButton
          disabled={!validMatch ? true : false}
          onClick={handleSubmit}
          variant="gradient"
          color="info"
        >
          Change Password
        </MDButton>
      </MDBox>
    </DashboardLayout>
  );
}

export default ChangePassword;
