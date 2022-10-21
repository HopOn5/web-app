import React, { useState, useEffect } from "react";
import "./_home.scss";
import Tab from "@mui/material/Tab";
import Icon from "../../components/Icon";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import walkIcon from "../../icons/walk-tab.svg";
import cycleIcon from "../../icons/cycle-tab.svg";
import cabIcon from "../../icons/car-tab.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import RequestForm from "../routeRequest/RouteRequest";

const Home = () => {
    const getClassname = (subclass) =>
        `home-page${subclass ? `__${subclass}` : ""}`;
    const dispatch = useDispatch();
    const userInfo = useSelector((states) => states?.app?.userInfo);
    const [activeTab, setActiveTab] = useState("walk");

    const requestList = [];

    useEffect(() => {
        dispatch(updateCustomLayout({ title: `Welcome ${userInfo?.name}` }));
    }, [userInfo]);

    const tabs = [
        {
            label: "Walk",
            value: "walk",
            icon: walkIcon,
            content: <RequestForm type="walk" />
        },
        {
            label: "Cycle",
            value: "cycle",
            icon: cycleIcon,
            content: <RequestForm type="cycle" />
        },
        {
            label: "Cab share",
            value: "cab",
            icon: cabIcon,
            content: <RequestForm type="cab" />
        }
    ];

    const renderCards = () => {
        return <></>;
    };

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
            {requestList?.length > 0 && (
                <div className={getClassname("card-container")}>
                    {renderCards()}
                </div>
            )}
        </div>
    );
};

export default Home;
