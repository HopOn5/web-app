import React from "react";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";
import PageLayout from "./components/PageLayout";
import { PersonalDetails } from "./pages/onBoarding/personalDetails/PersonalDetails";

const App = () => {
  return (
    <div className="root-container">
      <PageLayout>
        <AppRouter />
        <PersonalDetails />
      </PageLayout>
    </div>
  );
};

export default App;
