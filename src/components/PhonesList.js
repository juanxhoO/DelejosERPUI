// @mui material components
import { TableBody, TableContainer, TableRow, Typography } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React example components
import MDInput from "components/MDInput";
import { useParams } from "react-router-dom";
import axios from "config/axios";
import { useEffect, useState } from "react";
import MDButton from "components/MDButton";
import PropTypes from "prop-types";

function PhonesList({ phones = [] }) {
  return (
    <MDBox>
      {phones.map((phone, index) => (
        <MDBox key={index}>
          <Typography>{phone.number}</Typography>
        </MDBox>
      ))}
    </MDBox>
  );
}
PhonesList.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhonesList;
