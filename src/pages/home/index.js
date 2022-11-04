import React, { useEffect, useState } from "react";
import "./_home.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import Icon from "../../components/Icon";
import DashboardTable from "./DashboardTable";
import { formatRoutes } from "./utils";
import rightArr from "../../icons/right-arrow.svg";
// import { personalDetails } from "../../mocks/personalDetails";
import { EmptyHome } from "./Home";
import { updateUpcomingRequests } from "./redux/reducer";
import { useFilterUserRequestsMutation } from "../../services/requestsApi";
import { useNavigate } from "react-router-dom";
import { URLData } from "../../pageUrls";

const Home = () => {
    const getClassname = (subclass) =>
        `home-page${subclass ? `__${subclass}` : ""}`;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [upcomingRouteList, setUpcomingRouteList] = useState([]);
    const [completedRouteList, setCompletedRouteList] = useState([]);

    const [userInfo, layout, upcomingRoutes, completedRoutes, currentUser] =
        useSelector((states) => [
            states?.app?.userInfo,
            states?.app?.layout,
            states?.home?.upcomingRoutes,
            states?.home?.completedRoutes,
            states?.user?.currentUser
        ]);

    const [getUserRequests] = useFilterUserRequestsMutation();

    useEffect(() => {
        if (!layout?.title) {
            dispatch(
                updateCustomLayout({
                    title: `Welcome ${userInfo?.name ?? ""}`
                })
            );
        }
    }, [userInfo, layout]);

    useEffect(() => {
        setUpcomingRouteList(formatRoutes(upcomingRoutes));
    }, [upcomingRoutes]);
    useEffect(() => {
        setCompletedRouteList(formatRoutes(completedRoutes));
    }, [completedRoutes]);

    const handleRowSelect = (rowData) => {
        navigate(URLData.routeRequestList.url, {
            state: { requestInfo: { ...rowData } }
        });
    };

    const getRequests = async () => {
        let res = await getUserRequests({ userId: currentUser?.uid });
        dispatch(updateUpcomingRequests(res?.data));
    };

    useEffect(() => {
        if (currentUser?.uid) {
            getRequests();
        }
    }, [currentUser]);

    const dashboardCols = [
        "start_loc",
        "end_loc",
        "start_time",
        "route_companion",
        "custom_cell"
    ];

    let isNotEmpty =
        upcomingRouteList?.length > 0 || completedRouteList?.length > 0;

    return (
        <div
            className={`${getClassname()} ${!isNotEmpty ? "empty-screen" : ""}`}
        >
            {isNotEmpty ? (
                <>
                    <div className={getClassname("upcoming-container")}>
                        <DashboardTable
                            header="All requests"
                            cols={dashboardCols}
                            rows={upcomingRouteList}
                            customCell={(rowData) => {
                                console.log("row", rowData);
                                return (
                                    <Icon
                                        icon={rightArr}
                                        onClick={() => handleRowSelect(rowData)}
                                        className={getClassname(
                                            "custom-last-cell"
                                        )}
                                    />
                                );
                            }}
                        />
                    </div>
                    {/* <div className={getClassname("expired-container")}>
                        <DashboardTable
                            header="Completed requests"
                            cols={dashboardCols}
                            rows={completedRouteList}
                            customCell={() => {}}
                        />
                    </div> */}
                </>
            ) : (
                <>
                    <EmptyHome />
                </>
            )}
        </div>
    );
};

export default Home;
