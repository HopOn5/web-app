import React, { useState } from "react";
import carrot from "../../icons/carrot.svg";
import { ChatInput } from "../../components/ChatInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import useFetchSnapshot from "../../helpers/useFetchSnapshot";
import { getChatId } from "./helper/getChatId";
import { useSendMessageMutation } from "../../services/chatsApi";
import { useUpdateUserChatsMutation } from "../../services/userChatsApi";
import { arrayUnion, serverTimestamp, Timestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import chat from "../../icons/chat-svgrepo-com.svg";
import { Typography } from "@mui/material";
import addIcon from "../../icons/plus.svg";
import Icon from "../../components/Icon";
import AddCompanionModal from "./AddCompanionModal";
import { useUpdateRequestsMutation } from "../../services/requestsApi";

const Chatbox = ({ getRequests }) => {
    const [currentUser, chatUser, routes] = useSelector((states) => [
        states?.user?.currentUser,
        states?.user?.chatUser,
        states?.routeRequest?.ownerRoutes
    ]);
    const [message, setMessage] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);

    const { res } = useFetchSnapshot(getChatId(currentUser, chatUser), "chats");
    const [sendMessage] = useSendMessageMutation();
    const [updateUserChat] = useUpdateUserChatsMutation();
    const [updateRequest, { isLoading }] = useUpdateRequestsMutation();

    const handleSend = async (message) => {
        let chatId = getChatId(currentUser, chatUser);
        await sendMessage({
            id: chatId,
            messages: arrayUnion({
                id: uuid(),
                text: message,
                senderId: currentUser.uid,
                date: Timestamp.now()
            })
        });

        await updateUserChat({
            id: currentUser.uid,
            routes: [],
            [chatId + ".lastMessage"]: {
                text: message
            },
            [chatId + ".date"]: serverTimestamp()
        });

        await updateUserChat({
            id: chatUser?.uid ?? chatUser?.id,
            routes: [],
            [chatId + ".lastMessage"]: {
                text: message
            },
            [chatId + ".date"]: serverTimestamp()
        });
        setMessage("");
    };

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    const handleAddCompanion = async (routeId) => {
        let routeCompanion = {
            uid: chatUser?.uid ?? chatUser?.id,
            firstName: chatUser?.firstName
        };
        let res = await updateRequest({
            id: routeId,
            routeCompanion
        });
        if (res?.data?.status === "Success") {
            getRequests();
            handleCloseModal();
        }
    };

    return (
        <div className="chat">
            <AddCompanionModal
                showModal={showAddModal}
                handleClose={handleCloseModal}
                handleConfirm={handleAddCompanion}
                isLoading={isLoading}
                routes={routes}
            />
            {Object.keys(chatUser)?.length <= 0 ? null : (
                <div className="chatInfo">
                    <div className="chatIcons">
                        <img src={chatUser?.photoURL ?? carrot} alt="" />
                        <span>{chatUser?.username ?? chatUser?.firstName}</span>
                    </div>
                    {routes?.length > 0 && (
                        <div className="chatIcons">
                            <Icon
                                className="chat__add-companion"
                                icon={addIcon}
                                onClick={handleShowAddModal}
                            />
                        </div>
                    )}
                </div>
            )}
            {Object.keys(chatUser)?.length <= 0 ? (
                <div className="emptyIcon">
                    <img src={chat} alt="" />
                    <Typography sx={{ color: "grey", pt: 0.5 }}>
                        Welcome to the chat space. Connect and find your
                        Tag-Along mate.
                    </Typography>
                </div>
            ) : (
                <>
                    <Messages chatMessages={res?.messages ?? []} />
                    <ChatInput
                        onSend={handleSend}
                        message={message}
                        setMessage={setMessage}
                    />
                </>
            )}
        </div>
    );
};

export default Chatbox;
