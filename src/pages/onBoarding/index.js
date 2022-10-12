import {
  Step,
  StepButton,
  Stepper,
  Box,
  Typography,
  Button,
  StepLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import { PersonalDetails } from "./personalDetails/PersonalDetails";
import UploadVerification from "./uploadVerification/UploadVerification";

const Onboarding = ({}) => {
  const dispatch = useDispatch();
  const layout = useSelector((states) => states.app.layout);

  const [stepNo, setStepNo] = useState(0);

  useEffect(() => {
    if (!layout?.title)
      dispatch(updateCustomLayout({ title: stepData[stepNo]?.title ?? "" }));
  }, [stepNo, layout]);

  const stepData = {
    0: { body: <PersonalDetails />, title: "Personal Details" },
    1: { body: <UploadVerification />, title: "Upload Verification" },
    2: { body: <></>, title: "Address Details" },
  };

  const getStepData = (step) => stepData[step].body;

  //mui stepper function implementation
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  //return getStepData(stepNo);

  const getSteps = () => {
    return ["Personal Details", "Document Upload", "Address Details"];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetails />;
      case 1:
        return <UploadVerification />;
      case 2:
        return;
      default:
        return;
    }
  };

  const steps = getSteps();

  return (
    <Box sx={{ width: "80%", margin: "auto", my: 5 }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel color="inherit">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Onboarding;
