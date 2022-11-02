import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    requestInfo: {}
};
const routeRequestsSlice = createSlice({
    name: "routeRequest",
    initialState,
    reducers: {
        updateRouteRequest(state, action) {
            state.requestInfo = { ...action.payload };
        }
    }
});

export const { updateRouteRequest } = routeRequestsSlice.actions;
export default routeRequestsSlice.reducer;
