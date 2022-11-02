import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export const ChatInput = ({ onSend, message, setMessage }) => {
    const handleSend = () => onSend(message);

    const handleKeyPress = (e) => {
        e.code === "Enter" && handleSend();
    };
    return (
        <div className="chat-input">
            <input
                value={message}
                type="text"
                placeholder="Type something..."
                onKeyPress={handleKeyPress}
                onChange={(e) => setMessage(e?.target?.value)}
            />

            <div className="chat-input__send">
                <AttachFileIcon />
                <input type="file" style={{ display: "none" }} id="file" />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};
