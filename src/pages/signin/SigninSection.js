import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "./SigninSection.scss";
import { toast, Toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SigninSection = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const signin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential.user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Wrong user credentials");
        }
    };

    return (
        <div>
            <h2 className="title">Welcome to Tag-Along</h2>
            <div className="textinput">
                <TextField
                    type="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={onChange}
                    endAdor
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    label="password"
                    variant="outlined"
                    onChange={onChange}
                />

                <div className="alignitems">
                    <div className="loginbutton">
                        <Button type="primary" onClick={signin}>
                            Login
                        </Button>
                    </div>
                    <Link to="/resetpassword" type="primarymed blue">
                        Forgot Password
                    </Link>
                    <div className="text">
                        <Text>Don't have an account?</Text>
                        <Link to="/registration" type="primarymed blue">
                            Register →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSection;
