import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import React from "react";

export const SelectField = (props) => {
    const { label, name, value, onChange, options, error, helperText } = props;
    return (
        <FormControl
            key={props?.keyValue ?? "select-key"}
            fullWidth
            error={error ? true : false}
        >
            <InputLabel>{label}</InputLabel>

            <Select
                name={name}
                label={label}
                value={value}
                onChange={onChange}
                fullWidth
                defaultValue={props?.defaultValue}
            >
                {options.map((menuItem) => (
                    <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};
