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
    const handleRegister = () => {
        console.log("You clicked register");
    };

    return (
        <div>
            <h2 className="heading">Let's get started...</h2>
            <div className="textfield">
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Create password"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Confirm password"
                    variant="outlined"
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
                        <Button type="primary" onClick={handleRegister}>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegForm;
