import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.webmanza.com/",
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({
        // getPokemonByName: builder.query({
        //   query: (name) => `pokemon/${name}`,
        // }),
        // getPokemonList: builder.query({
        //   query: () => `pokemon/`,
        // }),
    }),
});

// Export hooks for usage in functional components
export const {
    util: { getRunningQueriesThunk },
} = apiSlice;

// export endpoints for use in SSR
// export const { getPokemonByName, getPokemonList } = apiSlice.endpoints;
