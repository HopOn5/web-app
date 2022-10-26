import React, { useState } from "react";
import { UserChatList } from "../../components/UserChatList";
import SearchUser from "./SearchUser";

const ChatList = ({}) => {
    const [userList, setUserList] = useState([]);

    return (
        <div className="sidebar">
            {/* <Navbar /> */}
            <SearchUser setUserList={setUserList} />
            <UserChatList
                isListEmpty={userList?.length <= 0}
                userList={userList}
            />
        </div>
    );
};

export default ChatList;
