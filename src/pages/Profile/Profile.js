import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import BasicDetails from "./BasicDetails";
import AddressDetails from "./AddressDetails";
import "./Profile.scss";
import TemplateCard from "../../components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const isEdit = useSelector((state) => state?.profile?.isEdit);
  const personalDetailsData = useSelector((state) => state?.user?.currentUser);
  console.log("personaldetails", personalDetailsData);

  return isEdit ? (
    navigate("/profile-edit")
  ) : (
    <div className="profile__card">
      <TemplateCard>
        <div className="profile">
          <div className="profile__child">
            <Avatar
              alt="Ente padam"
              src={personalDetailsData.picture}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="profile__child">
            <AddressDetails data={personalDetailsData} />
          </div>
        </div>
      </TemplateCard>
      <TemplateCard>
        <BasicDetails data={personalDetailsData} />
      </TemplateCard>
    </div>
  );
};

export default Profile;
