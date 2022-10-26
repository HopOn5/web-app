import React from "react";
import { UserChatList } from "./UserChatList";
import { Navbar } from "./Navbar";
import { Search } from "./Search";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar />
            <Search />
            <UserChatList />
        </div>
    );
};
