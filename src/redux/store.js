import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { createLogger } from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiMiddlewares } from "./apiMiddlewares";

const middlewares = [];
middlewares.push(createLogger());
middlewares.push(...apiMiddlewares);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(middlewares)
});

setupListeners(store.dispatch);
