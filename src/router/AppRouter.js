import React from "react";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../pages/onBoarding";
import Registration from "../pages/registration/Registration";
import ResetPassword from "../pages/resetpassword/ResetPassword";
import Signin from "../pages/signin/Signin";
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
            <Route
                path={URLData.registration.url}
                element={<Registration />}
            ></Route>
            <Route path={URLData.signin.url} element={<Signin />}></Route>
            <Route
                path={URLData.resetpassword.url}
                element={<ResetPassword />}
            ></Route>
        </Routes>
    );
};

export default AppRouter;
