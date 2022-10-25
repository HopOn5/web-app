import * as yup from "yup";

export const initialValues = {
    start_loc: {
        streetAddress: "18 Nicholls St",
        postcode: "CV2 4GY",
        city: "Coventry",
        lat: "52.4122 / 52°24'43'N",
        lng: "-1.4914 / 1°29'29'W"
    },
    end_loc: {
        streetAddress: "Occupation Road",
        postcode: "CV2 4AB",
        city: "Coventry",
        lat: "52.4095 / 52°24'34'N",
        lng: "-1.4708 / 1°28'14'W"
    },
    start_time: "Oct 28 2022 08:51:00 GMT+0100",
    routeType: "walk"
};

export const basicSchema = yup.object().shape({
    start_loc: yup
        .object()
        .shape({
            streetAddress: yup.string(),
            pincode: yup.string(),
            city: yup.string(),
            lat: yup.string().required(),
            lng: yup.string().required()
        })
        .required("This is required"),
    end_loc: yup
        .object()
        .shape({
            streetAddress: yup.string(),
            pincode: yup.string(),
            city: yup.string(),
            lat: yup.string().required(),
            lng: yup.string().required()
        })
        .required("This is required"),
    start_time: yup.date().required("This is required."),
    routeType: yup.string().required()
});
