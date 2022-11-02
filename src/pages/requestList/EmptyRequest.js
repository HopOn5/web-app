import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import emptyIcon from "../../icons/nofilefound.svg";
import { URLData } from "../../pageUrls";

const EmptyRequest = () => {
    const navigate = useNavigate();
    const handleAddRequest = () => navigate(URLData.routeRequest.url);
    return (
        <div className="empty-request">
            <Icon icon={emptyIcon} className="empty-request__icon" />
            <div className="empty-request__content">
                <Text type="primaryMed fW8" className="empty-request__text">
                    Your request is not found!
                </Text>
                <Button
                    type="primary"
                    className="empty-request__btn"
                    onClick={handleAddRequest}
                >
                    {" "}
                    Add your request{" "}
                </Button>
            </div>
        </div>
    );
};

export default EmptyRequest;
