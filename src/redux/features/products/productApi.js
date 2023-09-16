import { apiSlice } from "../../app/api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // getThemeData: builder.mutation({
        //     query: () => ({
        //         url: "/general/v2/store-info",
        //         method: "POST",
        //     }),
        // }),
    }),
});

export const { } = productApi;
export const { } = productApi.endpoints;
