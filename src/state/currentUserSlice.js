import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
	name: "user",
	initialState: {
		displayName: "",
		uid: "",
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.displayName = action.payload.displayName;
			state.uid = action.payload.uid;
		},

		setUserLogout: state => {
			state.displayName = null;
			state.uid = null;
		},
	},
});

export const { setCurrentUser, setUserLogout } = currentUserSlice.actions;

export default currentUserSlice.reducer;
