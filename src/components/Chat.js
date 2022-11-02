import React from "react";
import carrot from "../icons/carrot.svg";
import { ChatInput } from "./ChatInput";
import { Messages } from "./Messages";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Chat = () => {
    const handleSend = (message) => {};
    return (
        <div className="chat">
            <div className="chatInfo">
                <div className="chatIcons">
                    <img src={carrot} alt="" />
                    <span>{"rizna"}</span>
                </div>
                <div className="chatIcons">
                    <MoreVertIcon />
                </div>
            </div>
            <Messages />
            <ChatInput onSend={handleSend} />
        </div>
    );
};
