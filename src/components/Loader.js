import React from "react";
import Icon from "./Icon";
import "../styles/components/_loader.scss";
import loader from "../icons/loader.svg";

const Loader = () => {
    return <Icon icon={loader} className="loader" />;
};

export default Loader;
