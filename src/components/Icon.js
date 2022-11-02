import { Avatar } from "@mui/material";
import React from "react";

const Icon = ({ icon, onClick, className, styles, type = "" }) => {
    if (type === "AVATAR")
        return (
            <Avatar
                src={icon}
                className={`${className} ${onClick ? "pointer" : ""}`}
                sx={styles}
                onClick={onClick}
            />
        );
    return (
        <img
            src={icon}
            className={`${className} icon ${onClick ? " pointer" : ""}`}
            onClick={onClick ?? (() => {})}
        />
    );
};

export default Icon;
