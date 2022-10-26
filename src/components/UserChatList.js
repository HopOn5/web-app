import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchSnapshot from "../helpers/useFetchSnapshot";
import {
    useGetChatMessageMutation,
    usePostChatMutation
} from "../services/chatsApi";
import { serverTimestamp } from "firebase/firestore";
import Text from "./Text";
import { useUpdateUserChatsMutation } from "../services/userChatsApi";
import formatUserChat from "../pages/chatSpace/helper/formatUserChat";
import { updateChatUser } from "../pages/registration/currentUserReducer";
import { getChatId } from "../pages/chatSpace/helper/getChatId";

export const UserChatList = ({ userList, isListEmpty }) => {
    const currentUser = useSelector((state) => state?.user?.currentUser);
    const dispatch = useDispatch();
    const { res } = useFetchSnapshot(currentUser.uid, "userChats");
    const [getChat] = useGetChatMessageMutation();
    const [updateUserChat] = useUpdateUserChatsMutation();
    const [postChat] = usePostChatMutation();

    const [existingUser, setExistingUsers] = useState([]);

    useEffect(() => {
        if (res) {
            setExistingUsers(
                formatUserChat(res, currentUser?.uid ?? currentUser?.id)
            );
        }
    }, [res]);

    const handleSelect = async (user) => {
        const combinedId = getChatId(currentUser, user);
        try {
            const res1 = await getChat({
                id: combinedId,
                singleDoc: true
            });
            // getDoc(doc(db, "chats", combinedId));

            // check if a chat exists
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
                        uid: user?.uid,
                        firstName: user?.firstName,
                        photoURL: user?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateUserChat({
                    id: user?.uid,
                    [combinedId + ".userInfo"]: {
                        uid: user?.uid,
                        firstName: user?.firstName,
                        photoURL: user?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
            dispatch(updateChatUser(user));
        } catch (err) {
            console.log("User chat list err", err);
        }
    };

    const renderUser = (user, key) => (
        <div
            className="userChat"
            key={`${key}-${user?.id ?? user?.uid}`}
            onClick={() => handleSelect(user)}
        >
            <img src={user?.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{user?.firstName}</span>
            </div>
        </div>
    );
    return (
        <div className="ch ats">
            {userList?.length > 0 && userList?.map((user) => renderUser(user))}
            {existingUser && existingUser?.length > 0 ? (
                existingUser
                    ?.sort((a, b) => b?.date - a?.date)
                    .map((existingUser, key) =>
                        renderUser(existingUser?.userInfo, key)
                    )
            ) : isListEmpty ? (
                <div className="chats__empty">
                    <Text type="primaryMed">No user available!</Text>
                </div>
            ) : null}
        </div>
    );
};
