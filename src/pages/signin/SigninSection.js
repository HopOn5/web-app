import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "./SigninSection.scss";
import { toast, Toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required")
});

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
        <Formik
            initialValues={{
                email: "",
                password: "",
                createpassword: ""
            }}
            validationSchema={Schema}
            onSubmit={signin}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => {
                return (
                    <div>
                        <h2 className="title">Welcome to Tag-Along</h2>
                        <div className="textinput">
                            <TextField
                                type="email"
                                id="email"
                                label="Email"
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange}
                                // endAdor
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="email">
                                {(error) => (
                                    <div className="error">{error}</div>
                                )}
                            </ErrorMessage>{" "}
                            <TextField
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={values.password}
                                label="password"
                                variant="outlined"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password ? (
                                <div className="error">{errors.password}</div>
                            ) : null}
                            <div className="alignitems">
                                <div className="loginbutton">
                                    <Button type="primary" onClick={handleSubmit}>
                                        Login
                                    </Button>
                                </div>
                                <Link
                                    to="/resetpassword"
                                    type="primarymed blue"
                                >
                                    Forgot Password
                                </Link>
                                <div className="text">
                                    <Text>Don't have an account?</Text>
                                    <Link
                                        to="/registration"
                                        type="primarymed blue"
                                    >
                                        Register →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SigninSection;
