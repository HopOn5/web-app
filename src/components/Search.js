import React from "react";
import carrot from "../icons/carrot.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <SearchIcon sx={{ pl: 0.5, color: "#BDBDBD" }} />
          <input
            type="text"
            placeholder="Find a user"
            //onKeyDown={handleKey}
            //onChange={(e) => setUsername(e.target.value)}
            //value={username}
          />
        </Grid>
      </div>
      {/* {err && <span>User not found!</span>}
    {user && (
      <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>
    )} */}

      {/* to be deleted */}
      <div className="userChat">
        <img src={carrot} alt="" />
        <div className="userChatInfo">
          <span>{"Rizna"}</span>
        </div>
      </div>
    </div>
  );
};
