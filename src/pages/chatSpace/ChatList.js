import React, { useState } from "react";
import { UserChatList } from "../../components/UserChatList";

const ChatList = ({ handleSelect }) => {
    const [userList, setUserList] = useState([]);

    return (
        <div className="sidebar">
            <UserChatList
                handleSelect={handleSelect}
                isListEmpty={userList?.length <= 0}
                userList={userList}
            />
        </div>
    );
};

export default ChatList;
