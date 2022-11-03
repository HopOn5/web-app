const filterOwnerRoutes = (data) => {
    return data.filter((route) => !route?.routeCompanion?.uid);
};

export default filterOwnerRoutes;
