import React from "react";
import { useSelector } from "react-redux";
import carrot from "../icons/carrot.svg";
import { personalDetails as currentUser } from "../mocks/personalDetails";

export const Navbar = () => {
    // const personalDetails = useSelector(
    //   (state) => state?.profile?.personalDetails
    // );

    return (
        <div className="navbar">
            <span className="logo">All Messages</span>
            <div className="user">
                {/* <img src={currentUser?.photoURL} alt="phofile data" />
        <span>{currentUser?.firstName}</span> */}
                {/* <button onClick={() => signOut(auth)}>logout</button>
        <img src={carrot} alt="" />
        <span>{"John"}</span> */}
                {/* <button>Tage mate</button> */}
            </div>
        </div>
    );
};
