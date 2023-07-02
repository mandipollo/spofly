const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "d0b3e7db6bmshd25a0a578456aa6p15d5eejsnd549f9fb9d6c",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
	},
};

const FetchPlaylist = async playlistId => {
	try {
		const response = await fetch(
			`https://spotify23.p.rapidapi.com/playlist/?id=${playlistId}`,
			options
		);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
};

export default FetchPlaylist;
