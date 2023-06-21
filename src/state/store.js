import { configureStore } from "@reduxjs/toolkit";
import playTrackReducer from "./playTrackSlice";

const store = configureStore({
	reducer: {
		playTrack: playTrackReducer,
	},
});

export default store;
