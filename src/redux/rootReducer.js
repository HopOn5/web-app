import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../appReducer";
import onBoardingReducer from "../pages/onBoarding/redux/reducer";
import { requestsApi } from "../services/requestsApi";
import { usersApi } from "../services/usersApi";
import profileReducer from "../pages/Profile/profileReducer";
import homeReducer from "../pages/home/redux/reducer";

export const rootReducer = combineReducers({
  onboarding: onBoardingReducer,
  app: appReducer,
  home: homeReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [requestsApi.reducerPath]: requestsApi.reducer,
  profile: profileReducer,
});

export const resetReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

//export default rootReducer;
