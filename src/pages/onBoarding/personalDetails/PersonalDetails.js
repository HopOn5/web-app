import React, { useState } from "react";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { InputField } from "../../../components/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { gender } from "../utils";

export const PersonalDetails = (props) => {
  const { formik } = props;

  const [value, setValue] = useState(null);

  console.log("errors", formik?.errors);

  return (
    <div>
      <Card sx={styles.cardItem}>
        <Button sx={styles.accountIconButton}>
          <AccountCircleIcon fontSize="large" sx={styles.accountIcon} />
        </Button>
        <Grid sx={{ px: 2, py: 1 }}>
          <Typography sx={{ pb: 2 }}>Personal Info</Typography>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formik?.values?.firstName}
                onChange={formik?.handleChange}
                sx={styles.inputField}
                helperText={
                  formik?.errors?.firstName && formik?.touched?.firstName
                    ? formik?.errors?.firstName
                    : null
                }
                error={
                  formik?.errors?.firstName && formik?.touched?.firstName
                    ? formik?.errors?.firstName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formik?.values?.lastName}
                onChange={formik?.handleChange}
                sx={styles.inputField}
                variant="outlined"
                helperText={
                  formik?.errors?.lastName && formik?.touched?.lastName
                    ? formik?.errors?.lastName
                    : null
                }
                error={
                  formik?.errors?.lastName && formik?.touched?.lastName
                    ? formik?.errors?.lastName
                    : null
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12} md={6} sm={12}>
              <TextField
                label="Email"
                name="email"
                value={formik?.values?.email}
                onChange={formik?.handleChange}
                sx={styles.inputField}
                helperText={
                  formik?.errors?.email && formik?.touched?.email
                    ? formik?.errors?.email
                    : null
                }
                error={
                  formik?.errors?.email && formik?.touched?.email
                    ? formik?.errors?.email
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formik?.values?.phoneNumber}
                onChange={formik?.handleChange}
                sx={styles.inputField}
                helperText={
                  formik?.errors?.phoneNumber && formik?.touched?.phoneNumber
                    ? formik?.errors?.phoneNumber
                    : null
                }
                error={
                  formik?.errors?.phoneNumber && formik?.touched?.phoneNumber
                    ? formik?.errors?.phoneNumber
                    : null
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <TextField
                label="Gender"
                name="gender"
                value={formik?.values?.gender}
                onChange={formik?.handleChange}
                sx={styles.inputField}
                helperText={
                  formik?.errors?.gender && formik?.touched?.gender
                    ? formik?.errors?.gender
                    : null
                }
                error={
                  formik?.errors?.gender && formik?.touched?.gender
                    ? formik?.errors?.gender
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(value) =>
                    formik?.setFieldValue("dob", value, true)
                  }
                  value={formik?.values?.dob}
                  renderInput={(params) => (
                    <TextField
                      error={Boolean(
                        formik?.touched?.dob && formik?.errors?.dob
                      )}
                      helperText={formik?.touched?.dob && formik?.errors?.dob}
                      label="Date of Birth"
                      name="dob"
                      fullWidth
                      {...params}
                    />
                  )}
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
  cardItem: { my: 10, padding: 5 },
  accountIconButton: { color: "#457a76" },
  accountIcon: { height: 100, width: 100 },
  inputField: {
    width: "100%",
  },
};
