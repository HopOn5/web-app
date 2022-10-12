import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import UploadVerification from "./uploadVerification/UploadVerification";

const Onboarding = ({}) => {
    const dispatch = useDispatch();
    const layout = useSelector((states) => states.app.layout);

    const [stepNo, setStepNo] = useState(1);

    useEffect(() => {
        if (!layout?.title)
            dispatch(
                updateCustomLayout({ title: stepData[stepNo]?.title ?? "" })
            );
    }, [stepNo, layout]);

    const stepData = {
        0: { body: <></>, title: "Personal Details" },
        1: { body: <UploadVerification />, title: "Upload Verification" },
        2: { body: <></>, title: "Address Details" }
    };

    const getStepData = (step) => stepData[step].body;
    return getStepData(stepNo);
};

export default Onboarding;
