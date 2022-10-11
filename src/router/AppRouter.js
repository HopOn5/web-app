import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Onboarding from "../pages/onBoarding";
import { URLData } from "../pageUrls";
import { useDispatch, useSelector } from "react-redux";
import { updateLayoutData } from "../appReducer";
import getLayoutData from "../helpers/getLayoutData";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = ({ children, ...props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const layoutData = useSelector((states) => states.app.layout);

    useEffect(() => {
        dispatch(updateLayoutData(getLayoutData(location.pathname) ?? {}));
    }, [location]);

    const handleLayoutClose = () => {
        navigate(layoutData?.exitTo ?? location?.state?.from ?? "/");
    };
    return (
        <PageLayout onClose={handleLayoutClose}>
            <Routes>
                <Route
                    path={URLData.onboarding.url}
                    element={<Onboarding />}
                ></Route>
            </Routes>
        </PageLayout>
    );
};

export default AppRouter;
