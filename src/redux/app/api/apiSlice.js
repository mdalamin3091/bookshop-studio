import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.webmanza.com/",
    prepareHeaders: (headers, { getState }) => {
        let token = getState().auth.access_token;
        headers.set("Origin", "bookshop.webmanza.com");

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status_code === 6000) {
        console.log("error", result)
        const refreshResult = await baseQuery(
            {
                url: "/auth/v2/get-access-token",
                method: "POST",
                headers: { Origin: "https://bookshop.webmanza.com" },
            },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            const user = api.getState();
            console.log("refreshResult", refreshResult)
            console.log("user", user)
            
            // store access token in cookie or localstorage
            api.dispatch(setCredentials({ ...refreshResult, user }));

            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {}
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});

// Export hooks for usage in functional components
export const {
    util: { getRunningQueriesThunk },
} = apiSlice;

// export endpoints for use in SSR
export const {} = apiSlice.endpoints;
