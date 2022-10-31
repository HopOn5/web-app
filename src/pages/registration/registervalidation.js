import * as yup from "yup";

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    createpassword: ""
};

export const schema = yup.object().shape({
    firstName: yup.string().required("This is required"),
    lastName: yup.string().required("This is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    createpassword: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
    password: yup
        .string()  
        .required("Confirm Password is required")
        .oneOf(
            [yup.ref("createpassword"), null],
            "Confirm Password does not match"
        )
});
