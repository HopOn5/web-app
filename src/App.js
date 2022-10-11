import React from "react";
import "./styles/index.scss";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        <div className="root-container">
            <AppRouter />
        </div>
    );
};

export default App;
