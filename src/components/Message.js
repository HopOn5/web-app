import React from "react";
import carrot from "../icons/carrot.svg";

export const Message = ({ message }) => {
    return (
        <div className={`message owner`}>
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
