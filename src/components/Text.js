import React from "react";

const Text = (props) => {
    return (
        <span
            onClick={props?.onClick}
            className={`${props?.type} ${props?.className}`}
        >
            {props?.children}
        </span>
    );
};

export default Text;
