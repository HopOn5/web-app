import React, { useEffect, useState } from "react";
import UploadVerification from "./uploadVerification/UploadVerification";

const Onboarding = ({}) => {
    const [stepNo, setStepNo] = useState(2);
    useEffect(() => {}, []);
    const stepData = {
        1: { body: <></> },
        2: { body: <UploadVerification /> }
    };
    const getStepData = (step) => stepData[step].body;
    return getStepData(stepNo);
};

export default Onboarding;
