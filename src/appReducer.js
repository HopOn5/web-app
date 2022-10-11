import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    layout: {}
};
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateLayoutData(state, action) {
            state.layout = { ...action?.payload };
        }
    }
});

export const { updateLayoutData } = appSlice.actions;
export default appSlice.reducer;
