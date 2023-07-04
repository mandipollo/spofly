import { configureStore } from "@reduxjs/toolkit";
import playTrackReducer from "./playTrackSlice";
import inputReducer from "./inputSlice";

const store = configureStore({
	reducer: {
		playTrack: playTrackReducer,
		input: inputReducer,
	},
});

export default store;
