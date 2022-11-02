import React, { useState } from "react";

import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const SearchUser = ({ setUserList }) => {
    const [username, setUsername] = useState("");
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("firstName", "==", username)
            );
            const querySnapshot = await getDocs(q);
            let newSearch = [];
            querySnapshot.forEach((doc) => newSearch.push(doc?.data()));
            setUserList(newSearch);
        } catch (err) {
            setErr(true);
            console.log(err);
        }
    };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
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
        </div>
    );
};

export default SearchUser;
