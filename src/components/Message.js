import React from "react";
import { useSelector } from "react-redux";
import carrot from "../icons/carrot.svg";

export const Message = ({ message }) => {
    const currentUserId = useSelector(
        (state) => state?.user?.currentUser?.uid ?? ""
    );

    return (
        <div
            className={`message message${
                message?.senderId === currentUserId ? "__owner" : "__chatuser"
            }`}
        >
            <div className="messageInfo">
                <img
                    // src={
                    //   message.senderId === currentUser.uid
                    //     ? currentUser.photoURL
                    //     : data.user.photoURL
                    // }
                    src={carrot}
                    alt=""
                />
                {/* <span>just now</span> */}
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {/* {message.img && <img src={message.img} alt="" />} */}
            </div>
        </div>
    );
};
