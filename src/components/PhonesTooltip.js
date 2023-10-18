import * as React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MDTypography from "./MDTypography";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import MDBox from "./MDBox";
import { useState } from "react";
function PhonesTooltip({ phones }) {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      padding: 20,
      color: "#000000",
      minWidth: 320,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <div>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <HtmlTooltip
            open={open}
            title={
              <MDBox>
                {phones.map((phone, index) => (
                  <MDBox key={phone.id} p={1}>
                    <MDTypography variant="" fontSize=".9rem" fontWeight="bold">
                      Phone {index + 1}:
                    </MDTypography>
                    <MDTypography variant="" fontSize=".9rem" fontWeight="normal">
                      {" "}
                      {phone.number}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
            }
          >
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="info"
              fontWeight="medium"
              onClick={handleTooltipOpen}
            >
              View
            </MDTypography>
          </HtmlTooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}

PhonesTooltip.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhonesTooltip;
