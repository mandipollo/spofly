import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
	name: "user",
	initialState: null,
	reducers: {
		setCurrentUser: (state, action) => {
			return action.payload;
		},

		resetUser: state => {
			return null;
		},
	},
});

export const { setCurrentUser, resetUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
