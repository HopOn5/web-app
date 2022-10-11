import React from "react";

const UploadVerification = () => {
    const getClassname = (classname) =>
        `upload-verification${classname ? `__${classname}` : ""}`;
    return <div className={getClassname()}>Verification</div>;
};

export default UploadVerification;
