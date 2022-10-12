import React from "react";
import "./Registration.scss";
import RegForm from "./RegForm";
import cycle from "./cycle.jpg";

const Registration = () => {
    return (
        <div className="register">
            <div className="register-child">
                <img src={cycle} alt="cycle" className="image" />
            </div>
            <div className="register-child">
                <RegForm />
            </div>
        </div>
    );
};

export default Registration;
