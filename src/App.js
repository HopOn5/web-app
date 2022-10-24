import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";
import PageLayout from "./components/layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { updateLayoutData } from "./appReducer";
import getLayoutData from "./helpers/getLayoutData";
import LayoutHeaderComponent from "./components/layout/LayoutHeaderComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useScript from "react-script-hook";

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const layoutData = useSelector((states) => states.app.layout);
    useScript({
        src: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        onload: () => console.log("loaded")
    });

    const [layoutProps, setLayoutProps] = useState({});

    const getLayoutProps = (layoutInfo) => {
        return {
            ...layoutInfo,
            rightComp: (
                <LayoutHeaderComponent
                    isRight
                    layoutData={layoutInfo?.right ?? {}}
                />
            ),
            leftComp: (
                <LayoutHeaderComponent layoutData={layoutInfo?.left ?? {}} />
            )
        };
    };

    useEffect(() => {
        const layout = getLayoutData(location.pathname);
        dispatch(updateLayoutData(layout ?? {}));
        setLayoutProps(getLayoutProps(layout ?? {}));
    }, [location]);

    const handleLayoutClose = () => {
        navigate(layoutData?.exitTo ?? location?.state?.from ?? "/");
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#165954"
            },
            secondary: {
                main: "#F9AC66",
                dark: "#ED6B5B"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="root-container">
                <PageLayout onClose={handleLayoutClose} {...layoutProps}>
                    <AppRouter />
                    <ToastContainer />
                </PageLayout>
            </div>
        </ThemeProvider>
    );
};

export default App;
