import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Onboarding from "../pages/onBoarding";
import EmptyProfile from "../pages/Profile/EmptyProfile";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/registration/Registration";
import RouteRequests from "../pages/routeRequest";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Signin from "../pages/signin/Signin";
import Landing from "../pages/landing/Landing";
import { URLData } from "../pageUrls";
import Googlemap from "../pages/Googlemap/googlemap";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={URLData.onboarding.url} element={<Onboarding />} />
            <Route path={URLData.profileEdit.url} element={<Onboarding />} />
            <Route path={URLData.registration.url} element={<Registration />} />
            <Route path={URLData.signin.url} element={<Signin />} />
            <Route
                path={URLData.resetpassword.url}
                element={<ResetPassword />}
            />
            <Route path={URLData.home.url} element={<Home />} />
            <Route path={URLData.profile.url} element={<Profile />} />
            <Route path={URLData.googlemap.url} element={<Googlemap />} />

            <Route
                path={URLData.routeRequest.url}
                element={<RouteRequests />}
            />
            <Route path={URLData.emptyProfile.url} element={<EmptyProfile />} />
            <Route path={URLData.landing.url} element={<Landing />} />
        </Routes>
    );
};

export default AppRouter;
