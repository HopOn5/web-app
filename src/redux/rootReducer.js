import { combineReducers } from "@reduxjs/toolkit"
import onBoardingReducer from "../pages/onBoarding/redux/reducer"

const rootReducer = combineReducers({ onboarding: onBoardingReducer })

export default rootReducer
