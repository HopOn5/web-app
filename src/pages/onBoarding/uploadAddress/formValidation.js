import * as yup from "yup";

export const initialValues = {
    houseNumber: "",
    streetAddress: "",
    city: "",
    county: "",
    postalCode: ""
};

export const basicSchema = yup.object().shape({
    houseNumber: yup.number().positive().integer(),
    streetAddress: yup.string().required("This is required."),
    city: yup.string().required("This is required."),
    county: yup.string().required("This is required."),
    postalCode: yup.string().required("This is required.")
});
