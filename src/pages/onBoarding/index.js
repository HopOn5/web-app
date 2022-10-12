import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import UploadVerification from "./uploadVerification/UploadVerification";
import UploadAddress from "./uploadAddress/UploadAddress";

const Onboarding = ({}) => {
    const dispatch = useDispatch();
    const layout = useSelector((states) => states.app.layout);

    const [stepNo, setStepNo] = useState(2);

    useEffect(() => {
        if (!layout?.title)
            dispatch(
                updateCustomLayout({ title: stepData[stepNo]?.title ?? "" })
            );
    }, [stepNo, layout]);

    const handleSubmitForm = ({ values, handleCallback }) => {};

    const stepData = {
        0: { body: <></>, title: "Personal Details" },
        1: { body: <UploadVerification />, title: "Upload Verification" },
        2: {
            body: <UploadAddress handleSubmit={handleSubmitForm} />,
            title: "Address Details"
        }
    };

    const getStepData = (step) => stepData[step].body;
    return getStepData(stepNo);
};

export default Onboarding;
