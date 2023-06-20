import { useLocation } from "react-router-dom";
import Album from "../components/Album";
import Navbar from "../components/Navbar";
const AlbumPage = () => {
	const location = useLocation();

	// retrieve id to pass in the album component
	const state = location?.state;

	return (
		<>
			<Navbar />
			<Album data={state} />
		</>
	);
};

export default AlbumPage;
