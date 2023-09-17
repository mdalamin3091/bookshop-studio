import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "./api/apiSlice";
import productReducer from "../features/products/productSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import authReducer from "../features/auth/authSlice";
import themeDataReducer from "../features/themeData/themeDataSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            products: productReducer,
            sidebar: sidebarReducer,
            themeData:themeDataReducer,
            auth: authReducer
        },
        middleware: (gDM) =>
            gDM().concat(apiSlice.middleware),
        devTools: process.env.NEXT_PUBLIC_ENV !== "production",
    });
}

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NEXT_PUBLIC_ENV !== "production",
});