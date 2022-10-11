import React from "react";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";
import PageLayout from "./components/PageLayout";

const App = () => {
    return (
        <div className="root-container">
            <PageLayout>
                <AppRouter />
            </PageLayout>
        </div>
    );
};

export default App;
