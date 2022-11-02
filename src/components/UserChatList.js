import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchSnapshot from "../helpers/useFetchSnapshot";
import Text from "./Text";
import formatUserChat from "../pages/chatSpace/helper/formatUserChat";

export const UserChatList = ({ userList, isListEmpty, handleSelect }) => {
    const currentUser = useSelector((state) => state?.user?.currentUser);
    const { res } = useFetchSnapshot(currentUser.uid, "userChats");
    const [existingUser, setExistingUsers] = useState([]);

    useEffect(() => {
        if (res) {
            setExistingUsers(
                formatUserChat(res, currentUser?.uid ?? currentUser?.id)
            );
        }
    }, [res]);

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
                    <Text type="primaryMed">No chats available!</Text>
                </div>
            ) : null}
        </div>
    );
};
