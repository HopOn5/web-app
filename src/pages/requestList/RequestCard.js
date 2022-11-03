import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import messageIcon from "../../icons/message.svg";
import { URLData } from "../../pageUrls";

const RequestCard = ({ key1, data }) => {
    const getClassname = (subclass) =>
        `request-card${subclass ? `__${subclass}` : ""}`;

    const navigate = useNavigate();
    const user = data?.user;
    const address = data?.end_loc;

    const handleMessageClick = async () => {
        navigate(URLData.messages.url, {
            state: { chatUser: data?.user }
        });
    };

    return (
        <div className={getClassname()} key={key1}>
            <div className={getClassname("user")}>
                <Icon
                    type="AVATAR"
                    icon={user?.photoURL}
                    className={getClassname("user-icon")}
                />
            </div>
            <div className={getClassname("details")}>
                <Text type="primaryMed fW7">{user?.firstName}</Text>
                <Text type="primarySmall fW4">{address?.streetAddress}</Text>
                <Text type="primarySmall fW4">{address?.postcode}</Text>
            </div>
            <div className={getClassname("message")}>
                <Icon
                    onClick={handleMessageClick}
                    icon={messageIcon}
                    className={getClassname("message-icon")}
                />
            </div>
        </div>
    );
};

export default RequestCard;
