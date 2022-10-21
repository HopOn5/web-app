import React, { useState } from "react";
import "./RegForm.scss";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

const RegForm = () => {
    const [open, setOpen] = useState(false);
    const handleTAndC = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        createpassword: "",
        password: ""
    });

    const { email, createpassword, password } = formData;

    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const register = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                createpassword,
                password
            );
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: email
            });
            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            delete formDataCopy.createpassword;
            formDataCopy.timestamp = serverTimestamp();
            await setDoc(doc(db, "users", user.uid), formDataCopy);
            navigate("/");
        } catch (error) {
            toast.error("something went wrong with registration");
        }
    };

    return (
        <div>
            <h2 className="heading">Let's get started...</h2>
            <div className="textfield">
                <TextField
                    type={email}
                    value={email}
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={onChange}
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={createpassword}
                    id="createpassword"
                    label="Create password"
                    variant="outlined"
                    onChange={onChange}
                />
                <TextField
                    type={showPassword ? "text" : "password"}
                    value={password}
                    id="password"
                    label="Confirm password"
                    variant="outlined"
                    onChange={onChange}
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
                                        {" "}
                                        Terms and Conditions
                                    </Text>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                            >
                                                Text in a modal
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2 }}
                                            >
                                                Duis mollis, est non commodo
                                                luctus, nisi erat porttitor
                                                ligula.
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </>
                            }
                        />
                    </FormGroup>
                    <div className="registerbutton">
                        <Button type="primary" onClick={register}>
                            Register
                        </Button>
                    </div>
                    <div className="text">
                        <Text>Already have an account? ?</Text>
                        {/* <Text type="primaryMed blue">Register </Text> */}
                        <Link to="/signin" type="primarymed blue">
                            signin →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegForm;
