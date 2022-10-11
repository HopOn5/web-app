import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../appReducer";
import onBoardingReducer from "../pages/onBoarding/redux/reducer";

const rootReducer = combineReducers({
    onboarding: onBoardingReducer,
    app: appReducer
});

export default rootReducer;
