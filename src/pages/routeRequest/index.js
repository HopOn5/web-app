import React, { useState, useEffect, useRef } from "react";
import "./_routeRequest.scss";
import Tab from "@mui/material/Tab";
import Icon from "../../components/Icon";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const RouteRequests = () => {
    const getClassname = (subclass) =>
        `home-page${subclass ? `__${subclass}` : ""}`;
    const dispatch = useDispatch();
    const userInfo = useSelector((states) => states?.app?.userInfo);
    const [activeTab, setActiveTab] = useState("walk");

    const requestList = [];

    const tabs = [
        // {
        //     label: "Walk",
        //     value: "walk",
        //     icon: walkIcon,
        //     content: <RequestForm type="walk" />
        // },
        // {
        //     label: "Cycle",
        //     value: "cycle",
        //     icon: cycleIcon,
        //     content: <RequestForm type="cycle" />
        // },
        // {
        //     label: "Cab share",
        //     value: "cab",
        //     icon: cabIcon,
        //     content: <RequestForm type="cab" />
        // }
    ];

    const renderTabComp = () =>
        tabs.map((item, index) => (
            <Tab
                label={
                    <Icon
                        icon={item?.icon}
                        className={`${getClassname("tab-icon")}`}
                    />
                }
                value={item?.value}
                key={`${index}-tab `}
            />
        ));

    const renderActiveTab = (tabId) => {
        return tabs.find((item) => item.value === tabId)?.content;
    };

    const handleTabChange = (e, value) => setActiveTab(value);

    const inputRef = useRef();

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            // console.log(place.formatted_address);
            // console.log(place.geometry.location.lat());
            // console.log(place.geometry.location.lng());
        }
    };

    return (
        <div className={getClassname()}>
            <div className={getClassname("container")}>
                <TabContext
                    value={activeTab}
                    className={getClassname("tab-context")}
                >
                    <TabList
                        onChange={handleTabChange}
                        className={getClassname("tab-list")}
                    >
                        {renderTabComp()}
                    </TabList>
                    <TabPanel value={activeTab}>
                        {renderActiveTab(activeTab)}
                    </TabPanel>
                </TabContext>
            </div>

            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                libraries={["places"]}
            >
                <StandaloneSearchBox
                    onLoad={(ref) => (inputRef.current = ref)}
                    onPlacesChanged={handlePlaceChanged}
                >
                    <TextField
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                    />
                </StandaloneSearchBox>
            </LoadScript>
        </div>
    );
};

export default RouteRequests;
