import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "./SigninSection.scss";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SigninSection = () => {
    const [signinEmail, setsigninEmail] = useState("");
    const [signinPassword, setsigninPassword] = useState("");

    const signin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                signinEmail,
                signinPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h2 className="title">Welcome to Tag-Along</h2>
            <div className="textinput">
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(event) => {
                        setsigninEmail(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    onChange={(event) => {
                        setsigninPassword(event.target.value);
                    }}
                />
                <div className="alignitems">
                    <div className="loginbutton">
                        <Button type="primary" onClick={signin}>
                            Login
                        </Button>
                    </div>
                    <Text type="primaryMed blue"> Forgot password?</Text>
                    <div className="text">
                        <Text>Don't have an account?</Text>
                        <Text type="primaryMed blue">Register </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSection;
