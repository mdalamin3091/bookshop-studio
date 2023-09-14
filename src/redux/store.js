import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiSlice } from "./features/api/apiSlice";
import productReducer from "./features/products/productSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            products: productReducer,
        },
        middleware: (gDM) =>
            gDM().concat(apiSlice.middleware),
        devTools: process.env.NEXT_PUBLIC_ENV !== "production",
    });
}

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NEXT_PUBLIC_ENV !== "production",
});