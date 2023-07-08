// const apiKey = process.env.REACT_APP_API_KEY;

// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": apiKey,
// 		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
// 	},
// };

// const FetchPlaylist = async playlistId => {
// 	try {
// 		const response = await fetch(
// 			`https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistId}&offset=0&limit=40`,
// 			options
// 		);
// 		const result = await response.json();

// 		return result;
// 	} catch (error) {
// 		throw Error("oops something went wrong");
// 	}
// };

// export default FetchPlaylist;
