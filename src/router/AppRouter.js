import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/onBoarding";
import Registration from "../pages/registration/Registration";
import Landing from "../pages/landing/Landing";
import Home from "../pages/home/Home";
import { URLData } from "../pageUrls";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = ({ children, ...props }) => {
    return (
        <Routes>
            <Route
                path={URLData.landing.url}
                element={<Landing />}></Route>
            <Route
                path={URLData.registration.url}
                element={<Registration />}></Route>
            {/*<Route
                path={URLData.login.url}
                element={<Login />}></Route>*/}
            <Route
                path={URLData.home.url}
                element={<Home />}></Route>
            <Route
                path={URLData.onboarding.url}
                element={<Onboarding />}></Route>
        </Routes>
    );
};

export default AppRouter;
