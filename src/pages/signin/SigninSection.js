import React, { useEffect, useState } from "react";
import { Alert, TextField } from "@mui/material";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "./SigninSection.scss";
import { toast, Toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useFormik } from "formik";
import { schema, initialValues } from "./signinvalidation";
import { URLData } from "../../pageUrls";

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

    const signin = async (data1) => {
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data1.email,
                data1.password
            );
            if (userCredential.user) {
                toast.success("Signin successfully");
                navigate(URLData.home.url);
            }
        } catch (error) {
            toast.error("Wrong user credentials");
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit: signin,
        validationSchema: schema
    });

    const { errors, touched } = formik;

    return (
        <div>
            <h2 className="title">Welcome to Tag-Along</h2>
            <div className="textinput">
                <TextField
                    type={formik.values.email}
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    // endAdor
                    onBlur={formik.handleBlur}
                    error={errors.email && touched.email}
                    helperText={
                        errors.email && touched.email ? (
                            <span className="error">{errors.email}</span>
                        ) : null
                    }
                />

                <TextField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formik.values.password}
                    label="password"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={errors.password && touched.password}
                    helperText={
                        errors.password && touched.password ? (
                            <span className="error">{errors.password}</span>
                        ) : null
                    }
                />
                <div className="alignitems">
                    <div className="loginbutton">
                        <Button type="primary" onClick={formik.handleSubmit}>
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
