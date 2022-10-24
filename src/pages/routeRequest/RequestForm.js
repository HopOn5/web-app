import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import { SelectField } from "../../components/SelectField";
import Button from "../../components/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StandaloneSearchBox } from "@react-google-maps/api";
import CustomCheckBox from "../../components/CustomCheckbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const RequestForm = ({ inputList, formik, isLoading }) => {
    const getClassname = (subclass) =>
        `request-form${subclass ? `__${subclass}` : ""}`;

    const { errors } = formik;
    const inputRef = useRef();

    const handlePlaceChanged = (e, info) => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            console.log(e, info);
            formik.setFieldValue(info?.key, {
                streetAddress: "",
                pincode: "",
                city: "",
                lat: "",
                lng: ""
            });
            // console.log(place.formatted_address);
            // console.log(place.geometry.location.lat());
            // console.log(place.geometry.location.lng());
        }
    };

    const getComponent = (inputData, key) => {
        switch (inputData?.type) {
            case "autocomplete":
                return (
                    <>
                        <GooglePlacesAutocomplete
                            selectProps={{
                                value: formik?.values[inputData?.valueKey]
                                    ?.streetAddress,
                                onChange: handlePlaceChanged
                            }}
                        />
                    </>
                    // <StandaloneSearchBox
                    //     key={`${key}-request-item`}
                    //     onLoad={(ref) => (inputRef.current = ref)}
                    //     onPlacesChanged={(e) =>
                    //         handlePlaceChanged(e, inputData)
                    //     }
                    // >
                    //     <TextField
                    //         key={`${key}-request-form`}
                    //         placeholder={inputData?.placeholder}
                    //         label={inputData?.label}
                    //         name={inputData?.key}
                    //         value={
                    //             formik.values[inputData?.valueKey]
                    //                 ?.streetAddress ?? ""
                    //         }
                    //         onChange={formik.handleChange}
                    //         className={getClassname("input-field")}
                    //         sx={styles.inputfield}
                    //         error={
                    //             errors[inputData?.key] &&
                    //             formik?.touched?.[inputData?.key]
                    //                 ? true
                    //                 : false
                    //         }
                    //         helperText={
                    //             formik?.touched?.[inputData?.key] &&
                    //             errors[inputData?.key]
                    //         }
                    //         fullWidth
                    //     />
                    // </StandaloneSearchBox>
                );
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
                        fullWidth
                        helperText={
                            formik?.touched?.[inputData?.key] &&
                            errors[inputData?.key]
                        }
                    />
                );
            case "date":
                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            className={getClassname("datepicker")}
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
                                    placeholder={inputData?.placeholder}
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
            case "custom_check":
                return <CustomCheckBox {...inputData?.props} />;
            default:
                return "";
        }
    };

    const renderInput = () =>
        inputList.map((inputData, key) => getComponent(inputData, key));

    return (
        <div className={getClassname()}>
            <div className={getClassname("form")}>{renderInput()}</div>

            <Button
                type="primary"
                onClick={formik.handleSubmit}
                isLoading={isLoading}
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
