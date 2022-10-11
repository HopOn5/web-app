import React from "react";

const Icon = ({ icon, onClick }) => {
    return (
        <img
            src={icon}
            className={className ?? "icon/"}
            onClick={onClick ?? (() => {})}
        />
    );
};

export default Icon;
