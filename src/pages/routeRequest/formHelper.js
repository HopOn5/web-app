import * as yup from "yup";

export const initialValues = {
    start_loc: "",
    end_loc: "",
    start_time: null,
    start_mile_radius: 1
};

export const basicSchema = yup.object().shape({
    start_loc: yup.string().required("This is required"),
    end_loc: yup.string().required("This is required."),
    start_time: yup.date().required("This is required."),
    start_mile_radius: yup.string().required("This is required.")
});
