import { useLocation } from "react-router-dom";
import Album from "../components/Album";

const AlbumPage = () => {
	const location = useLocation();

	// retrieve id to pass in the album component
	const state = location?.state;

	return (
		<>
			<Album data={state} />
		</>
	);
};

export default AlbumPage;
