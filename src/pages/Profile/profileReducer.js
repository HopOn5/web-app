import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    personalDetails: {},
    isEdit: false
};
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addProfileDetails(state, action) {
            state.personalDetails = { ...action?.payload };
        },
        setIsProfileEdit(state, action) {
            state.isEdit = action?.payload;
        }
    }
});

export const { addProfileDetails, setIsProfileEdit } = profileSlice.actions;
export default profileSlice.reducer;
