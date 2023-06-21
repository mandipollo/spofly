import { createSlice } from "@reduxjs/toolkit";

const PlayTrackSlice = createSlice({
	name: "playTrack",
	initialState: null,
	reducers: {
		playTrackReducer: (state, action) => {
			return action.payload;
		},
		resetTrack: state => {
			return null;
		},
	},
});

export const { playTrackReducer, resetTrack } = PlayTrackSlice.actions;

export default PlayTrackSlice.reducer;
