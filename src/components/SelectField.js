import { LensBlurRounded } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

export const SelectField = (props) => {
  const { label, name, value, onChange, options, error, helperText } = props;
  console.log("helper", helperText);
  return (
    <FormControl fullWidth error={error ? true : false}>
      <InputLabel>{label}</InputLabel>

      <Select
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
      >
        {options.map((menuItem) => (
          <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
