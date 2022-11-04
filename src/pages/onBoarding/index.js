import { Step, Stepper, Box, StepLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import Icon from "../../components/Icon";
import { PersonalDetails } from "./personalDetails/PersonalDetails";
import UploadVerification from "./uploadVerification/UploadVerification";
import leftarr from "../../icons/green_leftArrow.svg";
import rightarr from "../../icons/green_rightArrow.svg";
import "./_onboarding.scss";
import UploadAddress from "./uploadAddress/UploadAddress";
import { useFormik } from "formik";
import {
    initialValues,
    validateSchema
} from "./personalDetails/formValidation";
import uploadToStorage from "../../services/uploadToStorage";
import { addProfileDetails, setIsProfileEdit } from "../Profile/profileReducer";
import moment from "moment";
import { useUpdateUserDetailsMutation } from "../../services/usersApi";
import { URLData } from "../../pageUrls";
import { useNavigate } from "react-router-dom";

const Onboarding = ({}) => {
    //formik initialisation for personal Details component
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state?.user?.currentUser);
    const personalDetails = useSelector(
        (state) => state?.profile?.personalDetails
    );
    const formik = useFormik({
        initialValues,
        validationSchema: validateSchema,
        onSubmit: (values) => {
            const formatedDob = moment(values?.dob).format("MM/DD/YYYY");
            dispatch(addProfileDetails({ ...values, dob: formatedDob }));
            // useUpdateUserDetailsMutation(currentUser?.uid, {
            //   ...values,
            //   dob: formatedDob,
            // });
            handleNext();
        }
    });

    const [layout, verificationFile] = useSelector((states) => [
        states.app.layout,
        states?.onboarding?.verificationData ?? null
    ]);

    const [activeStep, setActiveStep] = useState(0);
    const [updateUser, { isLoading }] = useUpdateUserDetailsMutation();
    useEffect(() => {
        if (!layout?.title)
            dispatch(
                updateCustomLayout({ title: stepData[activeStep]?.title ?? "" })
            );
    }, [activeStep, layout]);

    const handleSubmitForm = async ({ values, handleCallback }) => {
        let downloadURL = await uploadToStorage(
            verificationFile,
            "verification"
        );
        dispatch(addProfileDetails({ ...values }));
        dispatch(setIsProfileEdit(false));
        let userData = {
            ...values,
            ...personalDetails,
            id: currentUser?.uid,
            downloadURL,
            preferences: { isOnboardingView: true }
        };
        let res = await updateUser(userData);
        if (res.data?.status === "Success") {
            navigate(URLData.routeRequest.url);
        }
    };

    const stepData = {
        0: {
            body: <PersonalDetails formik={formik} />,
            title: "Personal Details"
        },
        1: { body: <UploadVerification />, title: "Upload Verification" },
        2: {
            body: (
                <UploadAddress
                    handleSubmit={handleSubmitForm}
                    isLoading={isLoading}
                />
            ),
            title: "Address Details"
        }
    };

    const getStepData = (step) => stepData[step].body;

    //mui stepper function implementation

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        if (!isLastStep()) {
            setActiveStep((prevState) => prevState + 1);
        }
    };

    const handleSubmitClick = () => {
        if (activeStep === 0) {
            formik?.handleSubmit && formik?.handleSubmit();
        } else handleNext();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getSteps = () => {
        return ["Personal Details", "Document Upload", "Address Details"];
    };

    const steps = getSteps();

    return (
        <Box sx={styles.stepperStyle}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} sx={styles.stepNumberStyle}>
                        <StepLabel color="#457a76">{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={styles.alignItemCenter}>
                {activeStep !== 0 ? (
                    <Box sx={styles.alignItemCenter}>
                        <Icon
                            icon={leftarr}
                            className="onBoarding__stepper-icon"
                            onClick={handleBack}
                        />
                    </Box>
                ) : (
                    ""
                )}
                <Box> {getStepData(activeStep)}</Box>
                {activeStep !== 2 ? (
                    <Box sx={styles.alignItemCenter}>
                        <Icon
                            icon={rightarr}
                            className="onBoarding__stepper-icon"
                            onClick={() => {
                                handleSubmitClick();
                            }}
                        />
                    </Box>
                ) : (
                    ""
                )}
            </Box>
        </Box>
    );
};

export default Onboarding;

const styles = {
    stepperStyle: { width: "80%", margin: "auto", my: 5 },
    stepNumberStyle: {
        "& .MuiStepLabel-root .Mui-active": {
            color: "#457a76" // circle color (ACTIVE)
        },
        "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
            color: "common.white" // Just text label (ACTIVE)
        },
        "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
            fill: "white" // circle's number (ACTIVE)
        }
    },
    alignItemCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
};
