import React from "react";
import "./Signin.scss";
import SigninSection from "./SigninSection";
import banner from "./banner.jpg";

const Signin = () => {
    
    return (
        <div className="signin">
            <div className="child">
                <img src={banner}  className="image" />
            </div>
            <div className="textonimage">
                <p>Signin →</p>
            </div>
            <div className="child">
                <SigninSection />
            </div>
        </div>
    );
};

export default Signin;
