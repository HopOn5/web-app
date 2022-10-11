import React from "react";
import { useNavigate } from "react-router-dom";

const UploadVerification = () => {
    const getClassname = (classname) =>
        `upload-verification${classname ? `__${classname}` : ""}`;
    const navigate = useNavigate();
    return (
        <div className={getClassname()}>
            Verification
            <div onClick={() => navigate("/")}>click me</div>
        </div>
    );
};

export default UploadVerification;
