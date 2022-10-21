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
                                                Website Terms and Conditions
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                Introduction
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                These terms of use govern your
                                                use of our website; by using our
                                                website, you agree to these
                                                terms of use in full. If you
                                                disagree with these terms of use
                                                or any part of these terms of
                                                use, you must not use our
                                                website.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must be at least 18 years of
                                                age to use our website. By using
                                                our website and by agreeing to
                                                these terms of use, you warrant
                                                and represent that you are at
                                                least 18 years of age.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                License to use website
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                Unless otherwise stated, we own
                                                the intellectual property rights
                                                in the website and material on
                                                the website. Subject to the
                                                licence below, all these
                                                intellectual property rights are
                                                reserved.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You may view, download for
                                                caching purposes only, and print
                                                pages from the website for your
                                                own personal use, subject to the
                                                restrictions set out below and
                                                elsewhere in these terms of use.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not:
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • republish material from this
                                                website (including republication
                                                on another website);
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • sell, rent or sub-license
                                                material from the website;
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • reproduce, duplicate, copy or
                                                otherwise exploit material on
                                                our website for a commercial
                                                purpose;
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • edit or otherwise modify any
                                                material on the website; or
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                • redistribute material from
                                                this website [except for content
                                                specifically and expressly made
                                                available for redistribution]
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                Acceptable use
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                You must not use our website in
                                                any way that causes, or may
                                                cause, damage to the website or
                                                impairment of the availability
                                                or accessibility of the website;
                                                or in any way which is unlawful,
                                                illegal, fraudulent or harmful,
                                                or in connection with any
                                                unlawful, illegal, fraudulent or
                                                harmful purpose or activity.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not use our website to
                                                copy, store, host, transmit,
                                                send, use, publish or distribute
                                                any material which consists of
                                                (or is linked to) any spyware,
                                                computer virus, Trojan horse,
                                                worm, keystroke logger, rootkit
                                                or other malicious computer
                                                software.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not conduct any
                                                systematic or automated data
                                                collection activities
                                                (including, without limitation,
                                                scraping, data mining, data
                                                extraction and data harvesting)
                                                on or in relation to our website
                                                without our express written
                                                consent.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not use our website to
                                                transmit or send unsolicited
                                                commercial communications.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not use our website for
                                                any purposes related to
                                                marketing without our express
                                                written consent.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                Restricted access
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                Access to certain areas of our
                                                website is restricted. We
                                                reserve the right to restrict
                                                access to other areas of our
                                                website, or indeed our whole
                                                website, at our discretion.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                If we provide you with or you
                                                generate a user ID and password
                                                to enable you to access
                                                restricted areas of our website
                                                or other content or services,
                                                you must ensure that the
                                                password is kept confidential.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must notify us in writing
                                                immediately if you become aware
                                                of any unauthorised use of your
                                                account or password.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You are responsible for any
                                                activity on our website arising
                                                out of any failure to keep your
                                                password confidential and may be
                                                held liable for any losses
                                                arising out of such a failure.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not use any other
                                                person's user ID and password to
                                                access our website.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                User consent
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                In these terms of use, "your
                                                content" means material
                                                (including, without limitation,
                                                text, images, audio material,
                                                video material and audio-visual
                                                material) that you submit to our
                                                website, for whatever purpose.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You grant to us a worldwide,
                                                irrevocable, non-exclusive,
                                                royalty-free licence to use,
                                                reproduce, adapt, publish,
                                                translate and distribute your
                                                content in any existing or
                                                future media. You also grant to
                                                us the right to sub-license
                                                these rights and the right to
                                                bring an action for infringement
                                                of these rights.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You warrant and represent that
                                                your content will comply with
                                                these terms of use.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                Your content must not be illegal
                                                or unlawful, must not infringe
                                                any third party's legal rights
                                                and must not be capable of
                                                giving rise to legal action
                                                whether against you or us or a
                                                third party (in each case under
                                                any applicable law).
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                You must not submit any content
                                                to the website that is or has
                                                ever been the subject of any
                                                threatened or actual legal
                                                proceedings or other similar
                                                complaint.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                We reserve the right to edit or
                                                remove any material submitted to
                                                our website, or stored on our
                                                servers, or hosted or published
                                                upon our website.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                Notwithstanding our rights under
                                                these terms of use in relation
                                                to your content, we do not
                                                undertake to monitor the
                                                submission of such content to,
                                                or the publication of such
                                                content on, our website.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-title"
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontSize: 18, mt: 2 }}
                                            >
                                                Limited warranties
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                We do not warrant the
                                                completeness or accuracy of the
                                                information published on this
                                                website; nor do we commit to
                                                ensuring that the website
                                                remains available or that the
                                                material on the website is kept
                                                up to date.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                To the maximum extent permitted
                                                by applicable law, we exclude
                                                all representations, warranties
                                                and conditions relating to this
                                                website and the use of this
                                                website (including, without
                                                limitation, any warranties
                                                implied by law in respect of
                                                satisfactory quality, fitness
                                                for purpose and/or the use of
                                                reasonable care and skill).
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
                                                sx={{ mt: 2, fontSize: 15 }}
                                            >
                                                The full name of our company is
                                                TagAlong.
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{ mt: 1, fontSize: 15 }}
                                            >
                                                Our registered address is
                                                http://www.tagalong.co.uk
                                            </Typography>
                                            <Typography
                                                id="modal-modal-description"
                                                sx={{
                                                    mt: 1,
                                                    mb: 5,
                                                    fontSize: 15
                                                }}
                                            >
                                                You can contact us by email to
                                                abc@xyz.com
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
