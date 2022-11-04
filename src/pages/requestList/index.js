import React, { useEffect } from "react";
import { useFilterSearchRequestsMutation } from "../../services/requestsApi";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button";
import { mileRadius } from "../routeRequest/utils";
import { SelectField } from "../../components/SelectField";
import "./_requestList.scss";
import RequestCard from "./RequestCard";
import { useLocation } from "react-router-dom";
import EmptyRequest from "./EmptyRequest";

const RequestList = () => {
    const getClassname = (subclass) =>
        `request-list${subclass ? `__${subclass}` : ""}`;
    const [nearbyRadius, setNearbyRadius] = useState(1);
    const [requestList, setRequestList] = useState([]);
    const [user, requestInfo] = useSelector((states) => [
        states.user.currentUser,
        states.routeRequest?.requestInfo
    ]);
    const location = useLocation();
    const currentUserRequest = location?.state?.requestInfo ?? requestInfo;

    const [getRequests] = useFilterSearchRequestsMutation();

    const handleNearbySelect = (e) => setNearbyRadius(e?.target?.value);
    console.log(currentUserRequest, "current user requesr", location?.state);
    const getRequestList = async () => {
        let res = await getRequests({
            userId: user?.uid,
            nearbyRadius,
            ...currentUserRequest
        });
        setRequestList(res?.data);
    };

    const handleSearch = () => getRequestList();

    useEffect(() => {
        if (user?.uid) getRequestList();
    }, [user]);

    return (
        <div className={getClassname()}>
            <div className={getClassname("nearby-drop-container")}>
                <SelectField
                    label="Nearby radius"
                    name="nearbyRadius"
                    options={mileRadius}
                    value={nearbyRadius}
                    onChange={handleNearbySelect}
                    className={getClassname("nearby-drop")}
                />
                <Button type="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>
            <div className={getClassname("list")}>
                {requestList?.length > 0 ? (
                    requestList?.map((request, key) => (
                        <RequestCard
                            key1={`${key}-request-card`}
                            data={request}
                        />
                    ))
                ) : (
                    <EmptyRequest
                        isRequestAdded={
                            Object.keys(currentUserRequest)?.length > 0
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default RequestList;
