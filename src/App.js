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
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import { auth } from "./firebase/config";
import {
  setCurrentUser,
  updateUserData,
} from "./pages/registration/currentUserReducer";
import { useGetUserDetailsQuery } from "./services/usersApi";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const layoutData = useSelector((states) => states.app.layout);
  const currentUser = useSelector((state) => state?.user?.currentUser);

  const { data, isError, isSuccess, refetch } = useGetUserDetailsQuery(userId);
  console.log("current user", currentUser);

  const [layoutProps, setLayoutProps] = useState({});

  const getLayoutProps = (layoutInfo) => {
    return {
      ...layoutInfo,
      rightComp: (
        <LayoutHeaderComponent isRight layoutData={layoutInfo?.right ?? {}} />
      ),
      leftComp: <LayoutHeaderComponent layoutData={layoutInfo?.left ?? {}} />,
    };
  };

  useEffect(() => {
    const layout = getLayoutData(location.pathname);
    dispatch(updateLayoutData(layout ?? {}));
    setLayoutProps(getLayoutProps(layout ?? {}));
  }, [location]);

  useEffect(() => {
    dispatch(updateUserData(data));
  }, [data]);

  useEffect(() => {
    if (userId) {
      refetch();
    }
  }, [userId]);
  //To check if there is an authenticated user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid);
      dispatch(setCurrentUser(user));
    });
  }, []);

  const handleLayoutClose = () => {
    navigate(layoutData?.exitTo ?? location?.state?.from ?? "/");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#165954",
      },
      secondary: {
        main: "#F9AC66",
        dark: "#ED6B5B",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="root-container">
        <PageLayout onClose={handleLayoutClose} {...layoutProps}>
          <AppRouter />
        </PageLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
