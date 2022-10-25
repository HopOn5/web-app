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
import { auth, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
  p: 4,
};

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

  // onAuthStateChanged(auth, (currentUser) => {
  //     console.log("on auth change", currentUser, auth);
  //     setUser(currentUser);
  // });
  const register = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword,
        regcreatePassword
      );
      console.log(user);

      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      //after successfull authentical navigate to home page
      //navigate("/");
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
                      color: "secondary.main",
                    },
                  }}
                />
              }
              label={
                <>
                  <span style={{}}>I accept the</span>
                  <Text type="primaryMed blue" onClick={handleTAndC}>
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
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
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
