import React from "react";

const cellWrapper = (content1, content2) => (
    <div className="cell-wrapper">
        <div className="cell-wrapper-one">{content1}</div>
        {content2 && <div className="cell-wrapper-two">{content2}</div>}
    </div>
);
export const formatRoutes = (allRoutes, type) =>
    allRoutes?.map((routeInfo) => {
        console.log(routeInfo, "ROUTE");
        return {
            start_loc: cellWrapper(
                routeInfo?.start_loc?.streetAddress,
                routeInfo?.start_loc?.postcode
            ),
            end_loc: cellWrapper(
                routeInfo?.end_loc?.streetAddress,
                routeInfo?.end_loc?.postcode
            ),
            start_time: cellWrapper(
                new Date(routeInfo?.start_time?.seconds * 1000).toLocaleString(
                    "en-US"
                )
            ),
            route_companion: cellWrapper(
                routeInfo?.route_companion?.firstName ??
                    `No companion ${type === "upcoming" ? "yet" : "added"}`
                // routeInfo?.route_companion?.start_point?.streetAddress
            )
        };
    });
