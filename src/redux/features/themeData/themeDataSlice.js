import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeInfo: {},
};
export const themeDataSlice = createSlice({
    name: "themeData",
    initialState,
    reducers: {
        setThemeInfo: (state, { payload }) => {
            state.themeInfo = payload;
        },
    },
});

export const { setThemeInfo } = themeDataSlice.actions;
export default themeDataSlice.reducer;
