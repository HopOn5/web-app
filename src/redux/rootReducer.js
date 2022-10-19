import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../appReducer";
import onBoardingReducer from "../pages/onBoarding/redux/reducer";
import { requestsApi } from "../services/requestsApi";
import { usersApi } from "../services/usersApi";
import profileReducer from "../pages/Profile/profileReducer";

const rootReducer = combineReducers({
    onboarding: onBoardingReducer,
    app: appReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    profile: profileReducer
});

export default rootReducer;
