import * as yup from "yup";

export const initialValues = {
  houseNumber: "",
  streetAddress: "",
  city: "",
  county: "",
  postalCode: "",
};

const postalCodeRegEx =
  /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

export const basicSchema = yup.object().shape({
  houseNumber: yup.number().positive().integer(),
  streetAddress: yup.string().required("This is required."),
  city: yup.string().required("This is required."),
  county: yup.string().required("This is required."),
  postalCode: yup
    .string()
    .required("This is required.")
    .matches(postalCodeRegEx, "Invalid postal code"),
});
