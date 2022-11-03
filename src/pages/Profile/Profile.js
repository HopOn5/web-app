import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import BasicDetails from "./BasicDetails";
import AddressDetails from "./AddressDetails";
import "./Profile.scss";
import TemplateCard from "../../components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserDetailsMutation } from "../../services/usersApi";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state?.user?.currentUser);
  console.log(currentUser, "asdhas");

  const isEdit = useSelector((state) => state?.profile?.isEdit);

  return isEdit ? (
    navigate("/profile-edit")
  ) : (
    <div className="profile__card">
      <TemplateCard>
        <div className="profile">
          <div className="profile__child">
            <Avatar
              src={currentUser?.picture}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="profile__child">
            <AddressDetails data={currentUser} />
          </div>
        </div>
      </TemplateCard>
      <TemplateCard>
        <BasicDetails data={currentUser} />
      </TemplateCard>
    </div>
  );
};

export default Profile;
