import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const RenderApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderApp />);
