import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 110,
  height: 50,
  padding: 7,
  "& .MuiSwitch-track": {
    borderRadius: "50px",
    border: "3px solid white",
    opacity: 1,
    ...theme.applyStyles("light", {
      backgroundColor: "#f2f2f2",
    }),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
    "&:before": {
      content: "'AR'", // Reverse language when EN is selected
      color: "#000",
    },
    "&:after": {
      content: "'EN'", // Reverse language when AR is selected
      color: "#FF8704",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(43px)",
      "& .MuiSwitch-thumb:before": {
        content: "'EN'", // Show "EN" when checked
      },
      "& + .MuiSwitch-track:before": {
        color: "#FF8704",
        content: "'AR'", // Show "AR" in empty space when checked
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#f2f2f2",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    transform: "translate(13px,12px)",
    backgroundColor: "red",
    width: 40,
    height: 25,
    borderRadius: 30,
    border: "none",
    "&::before": {
      content: "'AR'", // Show "AR" when unchecked
      position: "relative",
      left: 8,
      top: 3,
    },
  },
}));

export default function CustomizedSwitches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
        label="Language switch"
      />

      {/*       <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      /> */}
    </FormGroup>
  );
}
