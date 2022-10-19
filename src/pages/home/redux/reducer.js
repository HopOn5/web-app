import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    upcomingRoutes: [
        {
            start_date: "12/12/1992",
            start_time: "09:00",
            end_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            start_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            route_companion: {}
        },
        {
            start_date: "12/12/1992",
            start_time: "09:00",
            end_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            start_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            route_companion: {}
        }
    ],
    completedRoutes: [
        {
            start_date: "12/12/1992",
            start_time: "09:00",
            start_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            end_point: {
                streetAddress: "18 Nicholls Street",
                pincode: "CV24GY"
            },
            route_companion: {
                name: "Jack",
                start_point: { streetAddress: "19 Nicholls Street" }
            }
        }
    ]
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
