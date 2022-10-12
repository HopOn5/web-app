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

const Onboarding = ({}) => {
  const dispatch = useDispatch();
  const layout = useSelector((states) => states.app.layout);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!layout?.title)
      dispatch(
        updateCustomLayout({ title: stepData[activeStep]?.title ?? "" })
      );
  }, [activeStep, layout]);

  const stepData = {
    0: { body: <PersonalDetails />, title: "Personal Details" },
    1: { body: <UploadVerification />, title: "Upload Verification" },
    2: { body: <></>, title: "Address Details" },
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-root .Mui-active": {
                color: "#457a76", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "common.white", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "white", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel color="#457a76">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeStep !== 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              icon={rightarr}
              className="onBoarding__stepper-icon"
              onClick={handleNext}
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
