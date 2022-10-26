import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.js";
import Onboarding from "../pages/onBoarding";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/registration/Registration";
import RouteRequests from "../pages/routeRequest";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Signin from "../pages/signin/Signin";
import Landing from "../pages/landing/Landing";
import { URLData } from "../pageUrls";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={URLData.onboarding.url} element={<Onboarding />} />
            <Route path={URLData.landing.url} element={<Landing />} />
            <Route path={URLData.registration.url} element={<Registration />} />
            <Route path={URLData.signin.url} element={<Signin />} />
            <Route
                path={URLData.resetpassword.url}
                element={<ResetPassword />}
            />
            <Route path={URLData.home.url} element={<Home />} />
            <Route path={URLData.profile.url} element={<Profile />} />
            <Route
                path={URLData.routeRequest.url}
                element={<RouteRequests />}
            />
        </Routes>
    );
};

export default AppRouter;
