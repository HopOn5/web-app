import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {},
};
const currentUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = { ...action?.payload };
    },
    updateUserData(state, action) {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
});

export const { setCurrentUser, updateUserData } = currentUserSlice.actions;
export default currentUserSlice.reducer;
