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
import { useFilterUserRequestsMutation } from "../../services/requestsApi";
import { updateOwnerRoutes } from "../requestList/redux/reducer";

export const ChatSpace = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state?.user?.currentUser);

    const [getChat] = useGetChatMessageMutation();
    const [updateUserChat] = useUpdateUserChatsMutation();
    const [postChat] = usePostChatMutation();
    const [getOwnerRequests] = useFilterUserRequestsMutation();

    const handleSelect = async (user) => {
        const combinedId = getChatId(currentUser, user);
        try {
            const res1 = await getChat({
                id: combinedId,
                singleDoc: true
            });

            // check if a chat exists
            if (!res1?.data?.messages) {
                //create a chat in chats collection
                await postChat({
                    id: combinedId,
                    messages: [],
                    singleDoc: true
                });
                //set up user chats for both users
                let currentUserChat = {
                    id: currentUser?.uid,
                    [combinedId + ".userInfo"]: {
                        uid: user?.uid ?? user?.id,
                        firstName: user?.firstName,
                        photoURL: user?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                };
                let userChat = {
                    id: user?.uid ?? user?.id,
                    [combinedId + ".userInfo"]: {
                        uid: currentUser?.uid ?? currentUser?.id,
                        firstName: currentUser?.firstName,
                        photoURL: currentUser?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                };

                await updateUserChat(currentUserChat);
                await updateUserChat(userChat);
            }
            dispatch(updateChatUser(user));
        } catch (err) {
            console.log("User chat list err", err);
        }
    };
    const getRequests = async () => {
        let res = await getOwnerRequests({ userId: currentUser?.uid });
        dispatch(updateOwnerRoutes(res?.data));
    };

    useEffect(() => {
        if (location?.state?.chatUser && currentUser?.uid) {
            handleSelect(location?.state?.chatUser);
        }

        if (currentUser?.uid) {
            getRequests();
        }
    }, [location, currentUser]);
    return (
        <div className="chatspace">
            <div className="container">
                <ChatList handleSelect={handleSelect} />
                <Chatbox getRequests={getRequests} />
            </div>
        </div>
    );
};
