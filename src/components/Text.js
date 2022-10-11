import React from "react";

const Text = (props) => {
    return <div className={props?.type}>{props?.children}</div>;
};

export default Text;
