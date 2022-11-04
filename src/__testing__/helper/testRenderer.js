import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

const testRenderer = (component, store) => {
    let mockStore = configureStore();
    return (
        <BrowserRouter>
            <Provider store={mockStore(store)}> {component}</Provider>
        </BrowserRouter>
    );
};

export default testRenderer;
