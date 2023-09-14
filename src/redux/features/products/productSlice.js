import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// setUser: (state, { payload }) => {
		// 	state.user = payload;
		// },
	},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
