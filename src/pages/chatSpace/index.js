import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Chat } from "../../components/Chat";
import "./_chatSpace.scss";

export const ChatSpace = () => {
  return (
    <div className="chatspace">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
