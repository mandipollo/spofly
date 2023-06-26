const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "d0b3e7db6bmshd25a0a578456aa6p15d5eejsnd549f9fb9d6c",
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
	},
};

const FetchArtistOverview = async artist => {
	try {
		const response = await fetch(
			`https://spotify23.p.rapidapi.com/artist_overview/?id=${artist}`,
			options
		);
		const result = await response.json();

		return result;
	} catch (error) {
		console.error(error);
	}
};

export default FetchArtistOverview;
