import React, { useState } from "react";
import carrot from "../../icons/carrot.svg";
import { ChatInput } from "../../components/ChatInput";
import Messages from "./Messages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import useFetchSnapshot from "../../helpers/useFetchSnapshot";
import { getChatId } from "./helper/getChatId";
import { useSendMessageMutation } from "../../services/chatsApi";
import { useUpdateUserChatsMutation } from "../../services/userChatsApi";
import { arrayUnion, serverTimestamp, Timestamp } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import chat from "../../icons/chat-svgrepo-com.svg";
import { Typography } from "@mui/material";

const Chatbox = ({}) => {
    const [currentUser, chatUser] = useSelector((states) => [
        states?.user?.currentUser,
        states?.user?.chatUser
    ]);
    const [message, setMessage] = useState("");

    const { res } = useFetchSnapshot(getChatId(currentUser, chatUser), "chats");
    const [sendMessage] = useSendMessageMutation();
    const [updateUserChat] = useUpdateUserChatsMutation();

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
            [chatId + ".lastMessage"]: {
                text: message
            },
            [chatId + ".date"]: serverTimestamp()
        });

        await updateUserChat({
            id: chatUser?.uid ?? chatUser?.id,
            [chatId + ".lastMessage"]: {
                text: message
            },
            [chatId + ".date"]: serverTimestamp()
        });
        setMessage("");
    };

    return (
        <div className="chat">
            {Object.keys(chatUser)?.length <= 0 ? (
                <div className="chat__empty-box"></div>
            ) : (
                <div className="chatInfo">
                    <div className="chatIcons">
                        <img src={chatUser?.photoURL ?? carrot} alt="" />
                        <span>{chatUser?.username ?? chatUser?.firstName}</span>
                    </div>
                    <div className="chatIcons">
                        <MoreVertIcon />
                    </div>
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
