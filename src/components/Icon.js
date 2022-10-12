import React from "react";

const Icon = ({ icon, onClick, className }) => {
    return (
        <img
            src={icon}
            className={`${className ?? "icon"}${onClick ? " pointer" : ""}`}
            onClick={onClick ?? (() => {})}
        />
    );
};

export default Icon;
