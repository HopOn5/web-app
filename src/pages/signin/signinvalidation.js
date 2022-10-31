import * as yup from "yup";

export const initialValues = {
    email: "",
    password: ""
};

export const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup.string().oneOf([yup.ref('password'), null]).min(6, 'Error')
});
