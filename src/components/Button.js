import React from "react";
import { Button as MaterialButton } from "@mui/material";
import Loader from "./Loader";
import "../styles/components/_button.scss";

const Button = ({ className, isLoading, ...props }) => {
    const getBtnType = (type) => {
        return `btn-${type}`;
    };
    if (props?.compType === "file") {
        return (
            <MaterialButton
                id={props?.id ?? ""}
                className={`${className ?? ""} button`}
                sx={styles[props?.type]}
                variant="contained"
                component="label"
            >
                {props?.children}
                <input
                    hidden
                    accept={props?.acceptTypes}
                    type="file"
                    size={props?.maxSize}
                    onChange={props?.onFileUpload}
                />
            </MaterialButton>
        );
    }
    if (isLoading)
        return (
            <div className="btn-loader">
                {" "}
                <Loader />
            </div>
        );
    return (
        <div
            className={`${className ?? ""} ${getBtnType(props?.type)} button`}
            onClick={props?.onClick}
        >
            {props?.children}
        </div>
    );
};

const styles = {
    primary: {
        borderRadius: "5px",
        backgroundColor: "#457a76",
        color: "white",
        fontSize: "16px",
        fontWeight: 800,
        padding: "10px 8px",
        display: "flex",
        justifyContent: "center",
        "&:hover": { backgroundColor: "#457a76" }
    },
    tWhite: {
        backgroundColor: "none",
        color: "white",
        fontSize: "16px",
        fontWeight: 800,
        padding: "10px 8px",
        display: "flex",
        justifyContent: "center"
    }
};

export default Button;
