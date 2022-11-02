import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import React from "react";

export const SelectField = (props) => {
    const {
        label,
        name,
        value,
        onChange,
        options,
        error,
        helperText,
        className
    } = props;
    return (
        <FormControl
            className={className}
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
                {options.map((menuItem, key) => (
                    <MenuItem value={menuItem.value} key={`${key}-menu-item`}>
                        {menuItem.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};
