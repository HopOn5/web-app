import carrot from "../icons/carrot.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useSelector } from "react-redux";
import { useUpdateUserChatsMutation } from "../services/userChatsApi";

//mock
//import { personalDetails as currentUser } from "../mocks/personalDetails";

export const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const currentUser = useSelector((state) => state?.user?.currentUser);

    const [updateUserChat, { isLoading, isError, isSuccess }] =
        useUpdateUserChatsMutation();

    const handleSearch = async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("firstName", "==", username)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
            console.log(err);
        }
    };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        const combinedId =
            currentUser?.uid > user?.uid
                ? currentUser?.uid + user?.uid
                : user?.uid + currentUser?.uid;
        // const [getChat, { isError, isSubmit, data }] = "";

        try {
            const res = await getDoc(doc(db, "chats", combinedId));
            // check if a chat exists
            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                //set up user chats for both users
                await updateUserChat({
                    id: currentUser?.uid,
                    [combinedId + ".userInfo"]: {
                        uid: currentUser?.uid,
                        firstName: currentUser?.firstName,
                        photoURL: currentUser?.photoUrl
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                await updateUserChat({
                    id: user?.uid,
                    [combinedId + ".userInfo"]: {
                        uid: user?.uid,
                        firstName: user?.firstName,
                        photoURL: user?.photoUrl
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
        } catch (err) {}

        setUser(null);
        setUsername("");
    };
    return (
        <div className="search">
            <div className="searchForm">
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white"
                    }}
                >
                    <SearchIcon sx={{ pl: 0.5, color: "#BDBDBD" }} />
                    <input
                        type="text"
                        placeholder="Find a user"
                        onKeyDown={handleKey}
                        onChange={(e) => setUsername(e?.target?.value)}
                        value={username}
                    />
                </Grid>
            </div>
            {err && <span>User not found!</span>}
            {user && (
                <div className="userChat" onClick={handleSelect}>
                    <img src={user?.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{user?.firstName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
