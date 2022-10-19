import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    upcomingRoutes: [],
    completedRoutes: []
};
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        updateCompletedRequests(state, action) {
            state.completedRoutes = action.payload;
        },
        updateUpcomingRequests(state, action) {
            state.upcomingRoutes = action.payload;
        }
    }
});

export const { updateCompletedRequests, updateUpcomingRequests } =
    homeSlice.actions;
export default homeSlice.reducer;
