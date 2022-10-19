import React from "react";
import TemplateCard from "../../components/Card";
import "./BasicDetails.scss";

const BasicDetails = (props) => {
    const { data } = props;
    return (
        <div className="basic-details__card">
            <h3 className="basic-details__heading">BASIC DETAILS</h3>
            <div className="basic-details">
                <div className="basic-details__items">
                    <div className="basic-details__items_child">PHONE:</div>
                    <div className="basic-details__items_child">EMAIL:</div>
                    <div className="basic-details__items_child">GENDER:</div>
                    <div className="basic-details__items_child">
                        DATE OF BIRTH:
                    </div>
                </div>
                <div className="basic-details__items">
                    <div className="basic-details__items_child_ans">
                        {data?.phoneNumber}
                    </div>
                    <div className="basic-details__items_child_ans">
                        {data?.email}
                    </div>
                    <div className="basic-details__items_child_ans">
                        {data?.gender}
                    </div>
                    <div className="basic-details__items_child_ans">
                        {data?.dob}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicDetails;
