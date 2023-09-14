import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const themeDataSlice = createSlice({
	name: "themeData",
	initialState,
	reducers: {
		// setUser: (state, { payload }) => {
		// 	state.user = payload;
		// },
	},
});

export const {} = themeDataSlice.actions;
export default themeDataSlice.reducer;
