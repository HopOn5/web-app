import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "../pages/onBoarding";
import { onboardingUrl } from "../pageUrls";

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/onboarding"} element={<Onboarding />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
