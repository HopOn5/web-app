import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import BasicDetails from "./BasicDetails";
import AddressDetails from "./AddressDetails";
import "./Profile.scss";
import TemplateCard from "../../components/Card";
import { useSelector } from "react-redux"; //useDispatch for later
//import { profileDetails } from "./utils";
//import { addProfileDetails } from "./profileReducer";

const Profile = () => {
    //const dispatch = useDispatch();
    //useEffect(() => {
    // dispatch(addProfileDetails(profileDetails));
    //}, []);

    const personalDetailsData = useSelector(
        (state) => state?.profile?.personalDetails
    );

    return (
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
