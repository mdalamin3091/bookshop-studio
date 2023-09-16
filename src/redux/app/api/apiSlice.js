import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.webmanza.com/",
    prepareHeaders: (headers, { getState }) => {
        let token = getState().auth.access_token;

        headers.set("Origin", "https://bookshop.webmanza.com");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.data && result.data.status_code === 6000) {
        const refreshResult = await baseQuery(
            {
                url: "/auth/v2/get-access-token",
                method: "POST",
            },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            const user = api.getState();
            console.log("refresh result", refreshResult.data);

            // store access token in cookie or localstorage
            // api.dispatch(setCredentials({ ...refreshResult, user }));
            api.dispatch(setCredentials({...refreshResult.data}));

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

export const {
    util: { getRunningQueriesThunk },
} = apiSlice;

