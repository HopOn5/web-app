import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: {},
    chatUser: {},
    currentMessages: []
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
        updateChatUser(state, action) {
            state.chatUser = { ...action?.payload };
        },
        setChatMessages(state, action) {
            state.currentMessages = [...action.payload];
        },
        updateChatMessages(state, action) {
            state.currentMessages = [
                ...state.currentMessages,
                ...action.payload
            ];
        }
    }
});

export const {
    setCurrentUser,
    updateUserData,
    updateChatUser,
    setMessages,
    updateCurrentMessages
} = currentUserSlice.actions;
export default currentUserSlice.reducer;
