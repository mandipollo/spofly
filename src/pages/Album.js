import { useLocation } from "react-router-dom";

const Album = () => {
	const location = useLocation();
	const state = location?.state;
	console.log(state);

	return;
};

export default Album;
