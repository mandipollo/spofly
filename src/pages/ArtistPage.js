import React from "react";
import Artist from "../components/Artist";
import { useLocation } from "react-router-dom";
const ArtistPage = () => {
	const location = useLocation();

	const state = location?.state;
	return (
		<>
			<Artist data={state} />
		</>
	);
};

export default ArtistPage;
