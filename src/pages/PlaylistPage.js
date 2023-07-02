import React from "react";
import Playlist from "../components/playlist";
import { useLocation } from "react-router-dom";
const PlaylistPage = () => {
	const location = useLocation();
	const state = location?.state;
	return <Playlist state={state} />;
};

export default PlaylistPage;
