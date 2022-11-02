import React, { useState } from "react";
import "./RegForm.scss";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Modal from "@mui/material/Modal";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { schema, initialValues } from "./registervalidation";
import TAndCContent from "./TAndCContent";
import { auth, db } from "../../firebase/config";
import { URLData } from "../../pageUrls";
import { useCreateUserChatMutation } from "../../services/userChatsApi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const RegForm = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleTAndC = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [regEmail, setregEmail] = useState("");
    const [regPassword, setregPassword] = useState("");
    const [regcreatePassword, setregcreatePassword] = useState("");

    const [user, setUser] = useState({});

    const [createUserChat] = useCreateUserChatMutation();

    onAuthStateChanged(auth, (currentUser) => {
        //     console.log("on auth change", currentUser, auth);
        //     setUser(currentUser);
    });

    const [showPassword, setShowPassword] = useState(false);

    const register = async (data1) => {
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data1.email,
                data1.createpassword,
                data1.password
            );
            toast.success("Register successfully");
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: data1.email
            });
            const formDataCopy = {
                ...data1,
                preferences: { isOnboardingView: false }
            };
            delete formDataCopy.password;
            delete formDataCopy.createpassword;
            formDataCopy.timestamp = serverTimestamp();
            await setDoc(doc(db, "users", user.uid), formDataCopy);

            //create empty user chats on firestore

            let createUserRes = await createUserChat({ id: user.uid });

            console.log(createUserRes, "create user res");

            navigate(URLData.home.url);
        } catch (error) {
            toast.error("Credential not valid");
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit: register,
        validationSchema: schema
    });

    const { errors, touched } = formik;

    return (
        <div>
            <h2 className="reg-form__heading">Let's get started...</h2>
            <div className="reg-form__textfield">
                <TextField
                    type={formik.values.firstName}
                    value={formik.values.firstName}
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={errors.firstName && touched.firstName}
                    helperText={
                        errors.firstName && touched.firstName ? (
                            <span className="error">{errors.firstName}</span>
                        ) : null
                    }
                />
                <TextField
                    type={formik.values.lastName}
                    value={formik.values.lastName}
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={errors.lastName && touched.lastName}
                    helperText={
                        errors.lastName && touched.lastName ? (
                            <span className="error">{errors.lastName}</span>
                        ) : null
                    }
                />
                <TextField
                    type={formik.values.email}
                    value={formik.values.email}
                    id="email"
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
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={formik.values.createpassword}
                    id="createpassword"
                    label="Create password"
                    variant="outlined"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={errors.createpassword && touched.createpassword}
                    helperText={
                        errors.createpassword && touched.createpassword ? (
                            <span className="error">
                                {errors.createpassword}
                            </span>
                        ) : null
                    }
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    id="password"
                    label="Confirm password"
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
                <div className="alignthings">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...label}
                                    sx={{
                                        color: "secondary.main",
                                        "&.Mui-checked": {
                                            color: "secondary.main"
                                        }
                                    }}
                                />
                            }
                            label={
                                <>
                                    <span style={{}}>I accept the</span>
                                    <Text
                                        type="primaryMed blue"
                                        onClick={handleTAndC}
                                    >
                                        Terms and Conditions
                                    </Text>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <TAndCContent />
                                    </Modal>
                                </>
                            }
                        />
                    </FormGroup>
                    <div className="reg-form__registerbutton">
                        <Button type="primary" onClick={formik.handleSubmit}>
                            Register
                        </Button>
                    </div>
                    <div className="text">
                        <Text>Already have an account? ?</Text>
                        {/* <Text type="primaryMed blue">Register </Text> */}
                        <Link to={URLData?.signin.url} type="primarymed blue">
                            Signin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegForm;
