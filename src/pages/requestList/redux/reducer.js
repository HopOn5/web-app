import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    requestInfo: {},
    ownerRoutes: []
};
const routeRequestsSlice = createSlice({
    name: "routeRequest",
    initialState,
    reducers: {
        updateRouteRequest(state, action) {
            state.requestInfo = { ...action.payload };
        },
        updateOwnerRoutes(state, action) {
            state.ownerRoutes = [...action.payload];
        }
    }
});

export const { updateRouteRequest, updateOwnerRoutes } =
    routeRequestsSlice.actions;
export default routeRequestsSlice.reducer;
