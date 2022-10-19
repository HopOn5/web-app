import React from "react";

const cellWrapper = (content1, content2) => (
    <div className="cell-wrapper">
        <div className="cell-wrapper-one">{content1}</div>
        {content2 && <div className="cell-wrapper-two">{content2}</div>}
    </div>
);
export const formatRoutes = (allRoutes, type) =>
    allRoutes?.map((routeInfo) => ({
        start_point: cellWrapper(
            routeInfo?.start_point?.streetAddress,
            routeInfo?.start_point?.pincode
        ),
        end_point: cellWrapper(
            routeInfo?.end_point?.streetAddress,
            routeInfo?.end_point?.pincode
        ),
        start_time: cellWrapper(routeInfo?.start_date, routeInfo?.start_time),
        route_companion: cellWrapper(
            routeInfo?.route_companion?.name ??
                `No companion ${type === "upcoming" ? "yet" : "added"}`,
            routeInfo?.route_companion?.start_point?.streetAddress
        )
    }));
