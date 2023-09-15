import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openDrawer: false,
};

export const SidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setOpenDrawer: (state, { payload }) => {
            state.openDrawer = payload;
        },
    },
});

export const { setOpenDrawer } = SidebarSlice.actions;
export default SidebarSlice.reducer;
