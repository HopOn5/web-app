import React from "react";
import TemplateCard from "../../components/Card";
import Avatar from "@mui/material/Avatar";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";
import "./EmptyProfile.scss";

const EmptyProfile = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/onboarding");
    };

    return (
        <div className="emptyProfile">
            <TemplateCard>
                <div className="emptyProfile__details">
                    <div className="emptyProfile__details_child">
                        <div className="emptyProfile__details_child_none">
                            <Avatar
                                alt="Ente padam"
                                sx={{ width: 150, height: 150 }}
                            />
                        </div>
                        <div className="emptyProfile__details_child_none">
                            No details
                        </div>
                    </div>
                    <div className="emptyProfile__redirect">
                        Please provide your details in the{" "}
                        <Text type="primaryMed blue" onClick={handleClick}>
                            Onboarding page
                        </Text>
                    </div>
                </div>
            </TemplateCard>
        </div>
    );
};

export default EmptyProfile;
