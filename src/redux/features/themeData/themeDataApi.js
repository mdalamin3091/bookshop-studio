import { apiSlice } from "../../app/api/apiSlice";

const themeDataApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getThemeData: builder.mutation({
            query: () => ({
                url: "/general/v2/store-info",
                method: "POST",
                headers: {
                    "origin": "bookshop.webmanza.com"
                }
            }),
        }),
    }),
});

export const { useGetThemeDataMutation } = themeDataApi;
export const { getThemeData } = themeDataApi.endpoints;
