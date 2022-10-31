import * as yup from "yup";

export const initialValues = {
    start_loc: {
        streetAddress: "",
        postcode: "",
        place: "",
        lat: "",
        lng: ""
    },
    end_loc: {
        streetAddress: "",
        postcode: "",
        place: "",
        lat: "",
        lng: ""
    },
    start_time: "",
    routeType: "walk"
};

export const basicSchema = yup.object().shape({
    start_loc: yup
        .object()
        .shape({
            streetAddress: yup.string(),
            postcode: yup.string(),
            city: yup.string(),
            lat: yup.string().required(),
            lng: yup.string().required("This is required.")
        })
        .required("This is required"),
    end_loc: yup
        .object()
        .shape({
            streetAddress: yup.string(),
            postcode: yup.string(),
            place: yup.string(),
            lat: yup.string().required(),
            lng: yup.string().required("This is required.")
        })
        .required("This is required"),
    start_time: yup.date().required("This is required."),
    routeType: yup.string().required()
});
