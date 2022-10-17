import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../appReducer";
import onBoardingReducer from "../pages/onBoarding/redux/reducer";
import { requestsApi } from "../services/requestsApi";
import { usersApi } from "../services/usersApi";

const rootReducer = combineReducers({
    onboarding: onBoardingReducer,
    app: appReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer
});

export default rootReducer;
