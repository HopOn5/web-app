import React from "react";
import carrot from "../icons/carrot.svg";
import { Input } from "./Input";
import { Messages } from "./Messages";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Chat = () => {
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
      <Input />
    </div>
  );
};
