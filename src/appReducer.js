import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    layout: {},
    userInfo: {}
};
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateLayoutData(state, action) {
            state.layout = { ...action?.payload };
        },
        updateCustomLayout(state, action) {
            state.layout = { ...state.layout, ...action.payload };
        }
    }
});

export const { updateLayoutData, updateCustomLayout } = appSlice.actions;
export default appSlice.reducer;
