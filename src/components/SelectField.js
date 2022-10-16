import { LensBlurRounded } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import React from "react";

export const SelectField = (props) => {
  const { label, value, onChange, options } = props;
  <Select label={label} value={value} onChange={onChange}>
    {options.map((menuItem) => (
      <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
    ))}
  </Select>;
};
