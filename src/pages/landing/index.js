import React, { useEffect, useState } from "react";
import "./_home.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomLayout } from "../../appReducer";
import Icon from "../../components/Icon";
//import DashboardTable from "./DashboardTable";
//import { formatRoutes } from "./utils";
import rightArr from "../../icons/right-arrow.svg";
// import { personalDetails } from "../../mocks/personalDetails";
//import { addProfileDetails } from "../Profile/profileReducer";
import { Landing } from "./Landing";

const Landing = () => {
  const getClassname = (subclass) =>
    `home-page${subclass ? `__${subclass}` : ""}`;

  const dispatch = useDispatch();
  const [upcomingRouteList, setUpcomingRouteList] = useState([]);
  const [completedRouteList, setCompletedRouteList] = useState([]);

  const [userInfo, layout, upcomingRoutes, completedRoutes] = useSelector(
    (states) => [
      states?.app?.userInfo,
      states?.app?.layout,
      states?.home?.upcomingRoutes,
      states?.home?.completedRoutes,
    ]
  );

  //mock data
  //   useEffect(() => {
  //     dispatch(addProfileDetails(personalDetails));
  //   }, []);

  useEffect(() => {
    if (!layout?.title) {
      dispatch(
        updateCustomLayout({
          title: `Welcome ${userInfo?.name ?? ""}`,
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

  const handleRowSelect = (rowData) => {};

  const dashboardCols = [
    "start_point",
    "end_point",
    "start_time",
    "route_companion",
    "custom_cell",
  ];

  let isNotEmpty =
    upcomingRouteList?.length > 0 || completedRouteList?.length > 0;

  return (
    <div className={`${getClassname()} ${!isNotEmpty ? "empty-screen" : ""}`}>
      {isNotEmpty ? (
        <>
          <div className={getClassname("upcoming-container")}>
            <DashboardTable
              header="Upcoming requests"
              cols={dashboardCols}
              rows={upcomingRouteList}
              customCell={(rowData) => (
                <Icon
                  icon={rightArr}
                  onClick={() => handleRowSelect(rowData)}
                  className={getClassname("custom-last-cell")}
                />
              )}
            />
          </div>
          <div className={getClassname("expired-container")}>
            <DashboardTable
              header="Completed requests"
              cols={dashboardCols}
              rows={completedRouteList}
              customCell={() => {}}
            />
          </div>
        </>
      ) : (
        <>
          <Landing />
        </>
      )}
    </div>
  );
};

export default Landing;
