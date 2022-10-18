import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    personalDetails: {}
};
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addProfileDetails(state, action) {
            state.personalDetails = { ...action?.payload };
        }
    }
});

export const { addProfileDetails } = profileSlice.actions;
export default profileSlice.reducer;
