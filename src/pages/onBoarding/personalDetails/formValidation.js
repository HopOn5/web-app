import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  dob: "",
  gender: "",
};

export const validateSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
});
