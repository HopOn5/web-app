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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
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

    const [regEmail, setregEmail] = useState("");
    const [regPassword, setregPassword] = useState("");
    const [regcreatePassword, setregcreatePassword] = useState("");

    const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     console.log("on auth change", currentUser, auth);
    //     setUser(currentUser);
    // });
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword,
                regcreatePassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    // const handleRegister = async () => {
    //   console.log("You clicked register");
    // };

    return (
        <div>
            <h2 className="reg-form__heading">Let's get started...</h2>
            <div className="reg-form__textfield">
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(event) => {
                        setregEmail(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Create password"
                    variant="outlined"
                    onChange={(event) => {
                        setregcreatePassword(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Confirm password"
                    variant="outlined"
                    onChange={(event) => {
                        setregPassword(event.target.value);
                    }}
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
                </div>
            </div>
        </div>
    );
};

export default RegForm;
