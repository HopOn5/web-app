import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";
import PageLayout from "./components/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { updateLayoutData } from "./appReducer";
import getLayoutData from "./helpers/getLayoutData";

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const layoutData = useSelector((states) => states.app.layout);

    const [layoutProps, setLayoutProps] = useState({});
    useEffect(() => {
        const layout = getLayoutData(location.pathname);
        dispatch(updateLayoutData(getLayoutData(location.pathname) ?? {}));
        setLayoutProps(getLayoutProps(layout));
    }, [location]);

    const getLayoutProps = (layoutData) => {
        let props = { leftComp: null, rightComp: null };
        switch (layoutData.leftCompType) {
            case "custom_":
                props.leftComp = <></>;
        }
    };

    const handleLayoutClose = () => {
        navigate(layoutData?.exitTo ?? location?.state?.from ?? "/");
    };

    return (
        <div className="root-container">
            <PageLayout onClose={handleLayoutClose} {...layoutProps}>
                <AppRouter />
            </PageLayout>
        </div>
    );
};

export default App;
