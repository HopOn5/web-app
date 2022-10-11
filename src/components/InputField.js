import { TextField } from "@mui/material";
import React from "react";

export const InputField = (props) => {
  const { customStyles, label } = props;
  return (
    <div sx={customStyles}>
      <TextField label={label} sx={{ width: "100%" }} />
    </div>
  );
};
