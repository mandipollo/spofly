import { configureStore } from "@reduxjs/toolkit";
import playTrackReducer from "./playTrackSlice";
import inputReducer from "./inputSlice";
import userReducer from "./currentUserSlice";

const store = configureStore({
	reducer: {
		playTrack: playTrackReducer,
		input: inputReducer,
		user: userReducer,
	},
});

export default store;
