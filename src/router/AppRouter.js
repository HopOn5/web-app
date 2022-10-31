import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "../pages/home";
import Onboarding from "../pages/onBoarding";
import EmptyProfile from "../pages/Profile/EmptyProfile";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/registration/Registration";
import RouteRequests from "../pages/routeRequest";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Signin from "../pages/signin/Signin";
import { URLData } from "../pageUrls";
import { ChatSpace } from "../pages/chatSpace";
import Googlemap from "../pages/Googlemap/googlemap";
import PrivateRoute from "../components/PrivateRoute";

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
            <Route path={URLData.home.url} element={<PrivateRoute />}>
            <Route path={URLData.home.url} element={<Home />} />
            </Route>
            <Route path={URLData.profile.url} element={<Profile />} />
            <Route path={URLData.googlemap.url} element={<Googlemap />} />

            <Route
                path={URLData.routeRequest.url}
                element={<RouteRequests />}
            />
            <Route path={URLData.chatSpace.url} element={<ChatSpace />} />
            <Route path={URLData.emptyProfile.url} element={<EmptyProfile />} />
        </Routes>
    );
};

export default AppRouter;
