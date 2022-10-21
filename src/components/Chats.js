import React from "react";
import carrot from "../icons/carrot.svg";

export const Chats = () => {
  return (
    // <div className="chats">
    //   {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
    //     <div
    //       className="userChat"
    //       key={chat[0]}
    //       onClick={() => handleSelect(chat[1].userInfo)}
    //     >
    //       <img src={chat[1].userInfo.photoURL} alt="" />
    //       <div className="userChatInfo">
    //         <span>{chat[1].userInfo.displayName}</span>
    //         <p>{chat[1].lastMessage?.text}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    //to be deleted

    <div className="chats">
      <div
        className="userChat"
        //key={chat[0]}
        //onClick={() => handleSelect(chat[1].userInfo)}
      >
        <img src={carrot} alt="" />
        <div className="userChatInfo">
          <span>{"Rixna"}</span>
          <p>{"hello"}</p>
        </div>
      </div>
    </div>
  );
};
