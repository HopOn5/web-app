import React from "react";
import TextField from "@mui/material/TextField";
import { SelectField } from "../../components/SelectField";
import Button from "../../components/Button";
import { initialValues, basicSchema } from "./formHelper";
import { useFormik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const RequestForm = () => {
    const getClassname = (subclass) =>
        `request-form${subclass ? `__${subclass}` : ""}`;

    const handleSubmit = () => {};

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: basicSchema
    });

    const { errors } = formik;

    const renderAutocompleteInput = inputList[1].map((inputData, key) => (
        <GooglePlacesAutocomplete />
    ));

    const getComponent = (inputData, key) => {
        switch (inputData?.type) {
            case "input":
                return (
                    <TextField
                        key={`${key}-request-form`}
                        placeholder={inputData?.placeholder}
                        label={inputData?.label}
                        name={inputData?.key}
                        value={formik.values[inputData?.key]}
                        onChange={formik.handleChange}
                        className={getClassname("input-field")}
                        sx={styles.inputfield}
                        error={
                            errors[inputData?.key] &&
                            formik?.touched?.[inputData?.key]
                                ? true
                                : false
                        }
                        helperText={errors[inputData?.key]}
                    />
                );
            case "date":
                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            key={`${key}-date`}
                            onChange={(value) =>
                                formik?.setFieldValue(
                                    inputData?.key,
                                    value,
                                    true
                                )
                            }
                            label={inputData?.label}
                            value={formik?.values?.[inputData?.key]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    error={Boolean(
                                        formik?.touched?.[inputData?.key] &&
                                            formik?.errors?.[inputData?.key]
                                    )}
                                    helperText={
                                        formik?.touched?.[inputData?.key] &&
                                        formik?.errors?.[inputData?.key]
                                    }
                                    label={inputData?.label}
                                    name={inputData?.key}
                                    fullWidth
                                />
                            )}
                        />
                    </LocalizationProvider>
                );
            case "drop":
                return (
                    <SelectField
                        keyValue={`${key}-select`}
                        label={inputData?.label}
                        name={inputData?.key}
                        options={dropData[inputData?.key]}
                        value={formik?.values?.[inputData?.key]}
                        onChange={(e) =>
                            formik.setFieldValue(
                                inputData?.key,
                                e?.target?.value
                            )
                        }
                        helperText={
                            formik?.errors?.[inputData?.key] &&
                            formik?.touched?.[inputData?.key]
                                ? formik?.errors?.[inputData?.key]
                                : null
                        }
                        error={
                            formik?.errors?.[inputData?.key] &&
                            formik?.touched?.[inputData?.key]
                                ? formik?.errors?.[inputData?.key]
                                : null
                        }
                    />
                );
            default:
                return null;
        }
    };

    const renderInput = (inputKey) =>
        inputList[inputKey].map((inputData, key) =>
            getComponent(inputData, key)
        );

    return (
        <div className={getClassname()}>
            <div className={getClassname("form")}>
                <div className={getClassname("form-one")}>{renderInput(1)}</div>
                <div className={getClassname("form-two")}>{renderInput(2)}</div>
            </div>
            <Button
                type="primary"
                onClick={formik.handleSubmit}
                isLoading={false}
                className={getClassname("form-submit")}
            >
                Request
            </Button>
        </div>
    );
};

const styles = {
    inputfield: {
        marginBottom: "15px"
    },
    card: { maxWidth: "500px", margin: "54px auto", padding: "35px" }
};

export default RequestForm;
