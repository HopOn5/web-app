import React from "react";
import ChatList from "./ChatList";
import Chatbox from "./Chatbox";
import "./_chatSpace.scss";

export const ChatSpace = () => {
    return (
        <div className="chatspace">
            <div className="container">
                <ChatList />
                <Chatbox />
            </div>
        </div>
    );
};
