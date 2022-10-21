import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export const Input = () => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        //onChange={(e) => setText(e.target.value)}
        //value={text}
      />
      {/* <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div> */}

      {/* to be deleted */}
      <div className="send">
        <AttachFileIcon />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <AddPhotoAlternateIcon />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
