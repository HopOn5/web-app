import React from "react";

const Button = ({ className, ...props }) => {
    const getBtnType = (type) => {
        return `btn-${type}`;
    };
    return (
        <div className={`${className} ${getBtnType(props?.type)}button`}>
            {props?.value}
        </div>
    );
};

export default Button;
