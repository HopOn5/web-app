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
import { db } from "../../firebase/config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TermsConditions from "./TermsConditions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    overflow: "scroll",
    height: "100%",
    display: "block",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    mt: 5
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
        console.log(e.target.id, "target", e.target.value);
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
                createpassword
            );
            toast.success("Register successfully");
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
            <h2 className="reg-form__heading">Let's get started...</h2>
            <div className="reg-form__textfield">
                <TextField
                    type={firstname}
                    value={firstname}
                    id="firstname"
                    label="First Name"
                    variant="outlined"
                    onChange={onChange}
                />
                <TextField
                    type={lastname}
                    value={lastname}
                    id="lastname"
                    label="Last Name"
                    variant="outlined"
                    onChange={onChange}
                />
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
                                                {TermsConditions.heading}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading1}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para11}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para12}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading2}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para21}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para22}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.filler1}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • {TermsConditions.point1}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • {TermsConditions.point2}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • {TermsConditions.point3}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • {TermsConditions.point4}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • {TermsConditions.point5}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading3}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para31}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para32}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para33}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para34}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para35}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading4}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para41}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para42}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para43}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para44}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para45}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading5}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para51}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para52}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para53}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para54}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para55}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                {TermsConditions.subHeading6}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                {TermsConditions.para61}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                {TermsConditions.para62}
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                Our details
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{
                                                    mt: 2,
                                                    mb: 5,
                                                    fontSize: 15
                                                }}
                                            >
                                                {TermsConditions.para63}
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </>
                            }
                        />
                    </FormGroup>
                    <div className="reg-form__registerbutton">
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
