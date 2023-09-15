import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "./features/api/apiSlice";
import productReducer from "./features/products/productSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            products: productReducer,
            sidebar: sidebarReducer,
        },
        middleware: (gDM) =>
            gDM().concat(apiSlice.middleware),
        devTools: process.env.NEXT_PUBLIC_ENV !== "production",
    });
}

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NEXT_PUBLIC_ENV !== "production",
});