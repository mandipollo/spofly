import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
	name: "input",
	initialState: "",
	reducers: {
		setInputReducer: (state, action) => {
			return action.payload;
		},

		removeInput: state => {
			return "";
		},
	},
});

export const { setInputReducer, removeInput } = inputSlice.actions;

export default inputSlice.reducer;
