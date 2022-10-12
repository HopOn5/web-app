import React from "react";
import { useNavigate } from "react-router-dom";
import { URLData } from "../../pageUrls";
import Button from "../Button";

const LoginButton = () => {
    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        navigate(URLData?.login?.url);
    };
    return (
        <Button type="tWhite" onClick={handleLoginRedirect}>
            Login
        </Button>
    );
};

export { LoginButton };
