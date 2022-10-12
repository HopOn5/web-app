import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";

const middlewares = [];
middlewares.push(createLogger());
export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
});
