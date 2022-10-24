import React, { useState } from "react";
import Card from "../../components/Card";
import { TextField } from "@mui/material";
import Button from "../../components/Button";
import "./ResetPassword.scss";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

// const Schema = Yup.object().shape({
//     email: Yup.string().required("Email is required").email("Email is invalid")
// });

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const onChange = (e) => setEmail(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {  
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            toast.success("Email was sent");
        } catch (error) {
            
            toast.error("Could not send reset email");
        }
    };

    return (
        // <Formik
        //     initialValues={{
        //         email: "",
              
        //     }}
        //     validationSchema={Schema}
        //     onSubmit={() => {}}
        // >
        //     {({
        //         values,
        //         // errors,
        //         // touched,
        //         handleChange,
        //         handleBlur,
        //         handleSubmit
        //     }) => {
                // return (
                    <div style={styles.card} >
                        <h5 className="resettitle">Reset Password</h5>
                        <div className="textinput">
                            <TextField
                                type="email"
                                id="email"
                                value={email}
                                label="Email"
                                variant="outlined"
                                onChange={onChange}
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                            />
                            {/* <ErrorMessage name="email">
                                {(error) => (
                                    <div className="error">{error}</div>
                                )}
                            </ErrorMessage>{" "} */}
                        </div>
                        <div className="resetalignitems">
                            <div className="resetbutton">
                                <Button type="primary" onClick={handleSubmit}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
        //         );
        //     }}
        // </Formik>
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
