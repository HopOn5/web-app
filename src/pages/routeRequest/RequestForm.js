import React from "react";
import TextField from "@mui/material/TextField";
import { SelectField } from "../../components/SelectField";
import Button from "../../components/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CustomCheckBox from "../../components/CustomCheckbox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AutocompleteAddress from "../../components/AutocompleteAddress";

const RequestForm = ({ inputList, formik, isLoading }) => {
    const getClassname = (subclass) =>
        `request-form${subclass ? `__${subclass}` : ""}`;

    const { errors } = formik;

    const formatAddress = (addr) => {
        let addrObj = {};
        const requiredFields = ["place", "postcode"];
        addr.forEach((item) => {
            requiredFields.forEach((field) =>
                item?.id?.includes(field) ? (addrObj[field] = item?.text) : null
            );
        });
        return addrObj;
    };

    const handleAutocomplete = (address, type) => {
        formik.setFieldValue(type, {
            streetAddress: address.text,
            lat: address?.geometry?.coordinates?.[0],
            lng: address?.geometry?.coordinates?.[1],
            ...formatAddress(address?.context ?? [])
        });
    };

    const getComponent = (inputData, key) => {
        switch (inputData?.type) {
            case "autocomplete":
                return (
                    <AutocompleteAddress
                        handleSelection={(adr) =>
                            handleAutocomplete(adr, inputData?.key)
                        }
                        inputProps={{
                            className: getClassname("input-field"),
                            key: `${key}-request-form`,
                            placeholder: inputData?.placeholder,
                            label: inputData?.label,
                            name: inputData?.key,
                            sx: styles.inputfield,
                            error:
                                errors[inputData?.key]?.lng &&
                                formik?.touched?.[inputData?.key]
                                    ? true
                                    : false,
                            fullWidth: true,
                            helperText:
                                formik?.touched?.[inputData?.key] &&
                                errors[inputData?.key]?.lng
                        }}
                    />
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
                            minDate={new Date()}
                            onChange={(value) =>
                                formik.setFieldValue(
                                    inputData?.key,
                                    value.$d,
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
                            sx={styles.inputfield}
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
        marginTop: "15px",
        backgroundColor: "white"
    },
    card: { maxWidth: "500px", margin: "54px auto", padding: "35px" }
};

export default RequestForm;
