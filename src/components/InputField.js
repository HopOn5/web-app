import { TextField } from "@mui/material";
import React from "react";

export const InputField = (props) => {
  const { customStyles, label, value, onChange } = props;
  return (
    <div sx={customStyles}>
      <TextField
        label={label}
        sx={styles.inputField}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const styles = {
  inputField: { width: "100%" },
};
