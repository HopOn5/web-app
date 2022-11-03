import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { gender } from "../utils";
import { SelectField } from "../../../components/SelectField";
import Avatar from "react-avatar-edit";
import user from "../../../icons/user-profile.svg";
import "./_personalDetails.scss";
import { useSelector } from "react-redux";
import { URLData } from "../../../pageUrls";
import { useLocation } from "react-router-dom";

export const PersonalDetails = (props) => {
  const { formik } = props;
  const location = useLocation();

  const personalDetails = useSelector((state) => state?.user?.currentUser);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [imageCrop, setImageCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);

  const onCrop = (view) => {
    setImageCrop(view);
  };

  const onClose = () => {};

  const handleModalClose = () => setDialogOpen(false);

  const saveImage = () => {
    setStoreImage(imageCrop);
    setDialogOpen(false);
  };

  const profileImage = storeImage;

  useEffect(() => {
    if (location?.pathname === URLData.profileEdit.url) {
      formik?.setValues(personalDetails);
      formik?.setFieldValue("gender", personalDetails.gender);
      formik?.setFieldValue("dob", personalDetails.dob);
    }
  }, [personalDetails]);

  //useEffect(() => {
  //}, [formik?.values]);

  return (
    <div>
      <Card sx={styles.cardItem}>
        <img
          className="personal-details__img"
          src={profileImage?.length ? profileImage : user}
          onClick={() => setDialogOpen(true)}
        />

        <Dialog
          open={dialogOpen}
          onClose={handleModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Upload your profile picture"}
          </DialogTitle>
          <DialogContent>
            <Avatar
              width={390}
              height={295}
              onCrop={onCrop}
              onClose={onClose}
            />
          </DialogContent>
          <DialogActions sx={{ margin: "auto" }}>
            <Button variant="contained" onClick={saveImage}>
              Upload
            </Button>
            <Button variant="outlined" onClick={handleModalClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Grid sx={{ px: 2, py: 1 }}>
          <Typography sx={styles.textPadding}>Personal Info</Typography>
          <Grid container spacing={2} sx={styles.textPadding}>
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
          <Grid container spacing={2} sx={styles.textPadding}>
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
          <Grid container spacing={2} sx={styles.textPadding}>
            <Grid item xs={12} md={6} sm={12} lg={6}>
              <SelectField
                label="Gender"
                name="gender"
                options={gender}
                // defaultValue={formik?.values?.gender}
                value={formik?.values?.gender ?? ""}
                onChange={(e) =>
                  formik.setFieldValue("gender", e?.target?.value)
                }
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
                  label="Date of Birth"
                  value={formik?.values?.dob}
                  inputProps={{
                    placeholder: "Date of Birth",
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(
                        formik?.touched?.dob && formik?.errors?.dob
                      )}
                      helperText={formik?.touched?.dob && formik?.errors?.dob}
                      label="Date of Birth"
                      name="dob"
                      fullWidth
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
  textPadding: { pb: 2 },
};
