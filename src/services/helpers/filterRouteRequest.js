import { getDistance, isPointWithinRadius } from "geolib";

// 1610m - 1mile

const sortRouteDistance = (route1, route2, userRoute) => {
    let dist1 = getDistance(
        { latitude: route1?.lat, longitude: route1?.lng },
        { latitude: userRoute?.lat, longitude: userRoute?.lng }
    );
    let dist2 = getDistance(
        { latitude: route2?.lat, longitude: route2?.lng },
        { latitude: userRoute?.lat, longitude: userRoute?.lng }
    );

    return Number(dist1) - Number(dist2);
};

const convertMileToMetre = (mile) => Number(mile * 1610);

const filterRouteRequest = (allData, filterInfo) => {
    let start_lat = filterInfo?.start_loc?.lat;
    let start_lng = filterInfo?.start_loc?.lng;
    let nearbyRadius = filterInfo?.nearbyRadius;
    let end_lat = filterInfo?.end_loc?.lat;
    let end_lng = filterInfo?.end_loc?.lng;

    let resData = allData.filter((item) => {
        let lat = item?.start_loc?.lat;
        let lng = item?.start_loc?.lng;
        let isInside = isPointWithinRadius(
            { latitude: start_lat, longitude: start_lng },
            { latitude: lat, longitude: lng },
            convertMileToMetre(nearbyRadius)
        );
        if (isInside && filterInfo?.routeType === item?.routeType) return item;
    });
    let sortedRes = [
        ...resData.sort((a, b) =>
            sortRouteDistance(a?.end_loc, b?.end_loc, {
                lat: end_lat,
                lng: end_lng
            })
        )
    ];

    return sortedRes;
};

export default filterRouteRequest;
