import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    personalInfo: {},
    verificationData: {},
    address: {}
};
const onBoardingSlice = createSlice({
    // A name, used in action types
    name: "onboarding",
    initialState,
    reducers: {
        updatePersonalInfo(state) {}
    }
});

export const { updatePersonalInfo } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
