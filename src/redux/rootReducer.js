import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "../appReducer";
import onBoardingReducer from "../pages/onBoarding/redux/reducer";
import { requestsApi } from "../services/requestsApi";
import { usersApi } from "../services/usersApi";
import profileReducer from "../pages/Profile/profileReducer";
import homeReducer from "../pages/home/redux/reducer";
import currentUserReducer from "../pages/registration/currentUserReducer";
import { chatsApi } from "../services/chatsApi";
import { userChatsApi } from "../services/userChatsApi";

const rootReducer = combineReducers({
    onboarding: onBoardingReducer,
    app: appReducer,
    home: homeReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [userChatsApi.reducerPath]: userChatsApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    profile: profileReducer,
    user: currentUserReducer
});

export default rootReducer;
