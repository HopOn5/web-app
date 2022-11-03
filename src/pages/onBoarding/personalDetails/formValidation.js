import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";

export const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  dob: "",
  gender: "",
};

const emailRegEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const phoneNumberRegEx =
  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
const day = new Date("2016-01-01");
export const validateSchema = Yup.object().shape({
  firstName: Yup.string().required("This is required"),
  lastName: Yup.string().required("This is required"),
  phoneNumber: Yup.string()
    .required("This is required")
    .matches(phoneNumberRegEx, "Invalid phone number"),
  email: Yup.string()
    .required("This is required")
    .matches(emailRegEx, "Invalid email"),
  //dob: Yup.string().required("This is required").min(day),
  gender: Yup.string().required("This is required"),

  dob: Yup.string()
    .required("This is required")
    .test("DOB", "You must be adult", (value) => {
      return differenceInYears(new Date(), new Date(value)) >= 18;
    }),
});
