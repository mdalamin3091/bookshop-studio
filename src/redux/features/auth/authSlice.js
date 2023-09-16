import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    access_token: null,
    refresh_token:null
};

export const authSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            const {access_token, refresh_token} = payload
            state.user = payload;
            state.access_token = access_token;
            state.refresh_token = refresh_token
        },
    },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
