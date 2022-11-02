import React, { useEffect } from "react";
import ChatList from "./ChatList";
import Chatbox from "./Chatbox";
import "./_chatSpace.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChatId } from "./helper/getChatId";
import { serverTimestamp } from "firebase/firestore";
import {
    useGetChatMessageMutation,
    usePostChatMutation
} from "../../services/chatsApi";
import { useUpdateUserChatsMutation } from "../../services/userChatsApi";
import { updateChatUser } from "../registration/currentUserReducer";

export const ChatSpace = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state?.user?.currentUser);

    const [getChat] = useGetChatMessageMutation();
    const [updateUserChat] = useUpdateUserChatsMutation();
    const [postChat] = usePostChatMutation();

    const handleSelect = async (user) => {
        console.log("user handle select", user);
        const combinedId = getChatId(currentUser, user);
        try {
            const res1 = await getChat({
                id: combinedId,
                singleDoc: true
            });

            // check if a chat exists
            console.log(
                res1?.data,
                "res data",
                !res1?.data?.messages,
                "combined",
                combinedId
            );
            if (!res1?.data?.messages) {
                //create a chat in chats collection
                await postChat({
                    id: combinedId,
                    messages: [],
                    singleDoc: true
                });
                //set up user chats for both users
                await updateUserChat({
                    id: currentUser?.uid,
                    [combinedId + ".userInfo"]: {
                        uid: user?.uid ?? user?.id,
                        firstName: user?.firstName,
                        photoURL: user?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateUserChat({
                    id: user?.uid ?? user?.id,
                    [combinedId + ".userInfo"]: {
                        uid: currentUser?.uid ?? currentUser?.id,
                        firstName: currentUser?.firstName,
                        photoURL: currentUser?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
            dispatch(updateChatUser(user));
        } catch (err) {
            console.log("User chat list err", err);
        }
    };
    useEffect(() => {
        if (location?.state?.chatUser && currentUser?.uid) {
            handleSelect(location?.state?.chatUser);
            // dispatch(updateChatUser(location?.state?.chatUser));
        }
    }, [location, currentUser]);
    return (
        <div className="chatspace">
            <div className="container">
                <ChatList handleSelect={handleSelect} />
                <Chatbox />
            </div>
        </div>
    );
};
