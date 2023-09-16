import { apiSlice } from "../../app/api/apiSlice";

const themeDataApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getThemeData: builder.query({
            query: () => ({
                url: "/general/v2/store-info",
                method: "GET",
            }),
        }),
    }),
});
// Export hooks for usage in functional components
export const { useGetThemeDataQuery } = themeDataApi;

// export endpoints for use in SSR
export const { getThemeData } = themeDataApi.endpoints;
