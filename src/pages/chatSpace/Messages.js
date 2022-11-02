import React from "react";
import { Message } from "../../components/Message";

const Messages = ({ chatMessages }) => {
    return (
        <div className="messages">
            {chatMessages.map((msg, key) => {
                return (
                    <div key={`${key}-chat-mesg`}>
                        <Message message={msg} />
                    </div>
                );
            })}
        </div>
    );
};

export default Messages;
