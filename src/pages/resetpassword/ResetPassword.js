import React, { useState } from "react";
import Card from "../../components/Card";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import "./ResetPassword.scss";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { schema, initialValues } from "./resetvalidation";

const ResetPassword = () => {

    const handleSubmit = async (data1) => {
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, data1.email);
            toast.success("Email was sent");
        } catch (error) {
            toast.error("Could not send reset email");
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: schema
    });

    const { errors, touched } = formik;

    return (
        <div style={styles.card}>
            <h5 className="resettitle">Reset Password</h5>
            <div className="textinput">
                <TextField
                    type={formik.values.email}
                    id="email"
                    value={formik.values.email}
                    label="Email"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={errors.email && touched.email}
                    helperText={
                        errors.email && touched.email ? (
                            <span className="error">{errors.email}</span>
                        ) : null
                    }
                />
            </div>
            <div className="resetalignitems">
                <div className="resetbutton">
                    <Button type="primary" onClick={formik.handleSubmit}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>

    );
};

const styles = {
    card: {
        maxWidth: "500px",
        margin: "54px auto",
        padding: "35px",
        alignItems: "center",
        border: "1px solid grey"
    }
};

export default ResetPassword;
