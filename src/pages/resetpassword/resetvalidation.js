import * as yup from "yup";

export const initialValues = {
    email: "",
};

export const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid")
});
