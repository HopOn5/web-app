import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    personalInfo: {},
    verificationData: null,
    address: {}
};
const onBoardingSlice = createSlice({
    // A name, used in action types
    name: "onboarding",
    initialState,
    reducers: {
        updatePersonalInfo(state) {},
        updateTermFile(state, action) {
            state.verificationData = action.payload;
        }
    }
});

export const { updatePersonalInfo, updateTermFile } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
