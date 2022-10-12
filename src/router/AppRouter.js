import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/onBoarding";
import { URLData } from "../pageUrls";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = ({ children, ...props }) => {
    return (
        <Routes>
            <Route
                path={URLData.onboarding.url}
                element={<Onboarding />}
            ></Route>
            <Route path={URLData.home.url}></Route>
            <Route path={URLData.registration.url}></Route>
        </Routes>
    );
};

export default AppRouter;
