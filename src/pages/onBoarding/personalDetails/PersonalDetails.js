import React, { useState } from "react";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { InputField } from "../../../components/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";

import { initialValues, validateSchema } from "./formValidation";

export const PersonalDetails = () => {
  const [value, setValue] = useState(null);

  // Formik Implementation
  const formik = useFormik({
    initialValues: initialValues,
    validate: validateSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div>
      <Card sx={styles.cardItem}>
        <Button sx={styles.accountIconButton}>
          <AccountCircleIcon fontSize="large" sx={styles.accountIcon} />
        </Button>
        <Grid sx={{ px: 2, py: 1 }}>
          <Typography sx={{ pb: 2 }}>Personal Info</Typography>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={6} md={6} sm={12}>
              <TextField
                label="First Name"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={12}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                sx={styles.inputField}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={6} md={6} sm={12}>
              <TextField
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={12}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                sx={styles.inputField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={6} md={6} sm={12}>
              <TextField
                label="Gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={6} md={6} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Basic example"
                  //value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                  name="dob"
                  value={formik.values.dob}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

const styles = {
  cardItem: { mx: 40, my: 10, padding: 5 },
  accountIconButton: { color: "#457a76" },
  accountIcon: { height: 100, width: 100 },
  inputField: {
    width: "100%",
  },
};
