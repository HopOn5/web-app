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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import {
    setCurrentUser,
    updateUserData
} from "./pages/registration/currentUserReducer";
import { useGetUserDetailsMutation } from "./services/usersApi";

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const layoutData = useSelector((states) => states.app.layout);
    const currentUser = useSelector((state) => state?.user?.currentUser);

    const [getUserData] = useGetUserDetailsMutation();

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

    useEffect(() => {
        const initialCall = async () => {
            let userInfo = await getUserData(
                currentUser?.uid ?? currentUser?.id
            );
            if (userInfo) dispatch(updateUserData(userInfo?.data));
        };
        if (currentUser?.uid || currentUser?.id) {
            initialCall();
        }
    }, [currentUser?.uid]);
    //To check if there is an authenticated user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch(setCurrentUser(user));
        });
    }, []);

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
