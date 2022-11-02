import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { basicSchema, initialValues } from "./formValidation";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import "./_uploadAddress.scss";
import { useSelector } from "react-redux";
import { URLData } from "../../../pageUrls";

const UploadAddress = (props) => {
  const getClassname = (classname) =>
    `upload-address${classname ? `__${classname}` : ""}`;

  const [isLoading, setLoading] = useState(false);

  const personalDetails = useSelector(
    (state) => state?.profile?.personalDetails
  );

  const handleSubmit = (values) => {
    setLoading(true);
    props?.handleSubmit &&
      props.handleSubmit({
        values,
        handleCallback: () => setLoading(false),
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: basicSchema,
  });

  const { errors } = formik;

  const inputList = [
    {
      label: "House number",
      placeholder: "Enter house number",
      key: "houseNumber",
    },
    {
      label: "Street Address*",
      placeholder: "Enter street address",
      key: "streetAddress",
    },
    {
      label: "City*",
      placeholder: "Enter city",
      key: "city",
    },
    {
      label: "County*",
      placeholder: "Enter county",
      key: "county",
    },
    {
      label: "Postal Code*",
      placeholder: "Enter postal code",
      key: "postalCode",
    },
  ];
  useEffect(() => {
    if (location?.pathname === URLData.profileEdit.url) {
      formik?.setValues(personalDetails);
    }
  }, [personalDetails]);

  const renderInput = () => {
    return inputList.map((inputData, key) => (
      <TextField
        key={`${key}-textfield`}
        placeholder={inputData?.placeholder}
        label={inputData?.label}
        name={inputData?.key}
        value={formik.values[inputData?.key]}
        onChange={formik.handleChange}
        className={getClassname("input-field")}
        sx={styles.inputfield}
        error={errors[inputData?.key] ? true : false}
        helperText={errors[inputData?.key]}
      />
    ));
  };

  return (
    <Card className={getClassname()} style={styles.card}>
      <div className={getClassname("header")}>
        <Text type="primaryLarge fW7">Address Details:</Text>
      </div>
      <div className={getClassname("form-container")}>{renderInput()}</div>
      <Button
        className={getClassname("submit-btn")}
        type="primary"
        onClick={formik.handleSubmit}
        isLoading={props?.isLoading}
      >
        Submit
      </Button>
    </Card>
  );
};

const styles = {
  inputfield: {
    marginBottom: "15px",
  },
  card: { maxWidth: "500px", margin: "54px auto", padding: "35px" },
};

export default UploadAddress;
