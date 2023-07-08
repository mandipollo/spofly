const apiKey = process.env.REACT_APP_API_KEY;

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": apiKey,
		"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
	},
};

const Search = async searchQuery => {
	try {
		if (searchQuery === "") return;
		const response = await fetch(
			`https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
			options
		);
		const result = await response.json();

		return result;
	} catch (error) {
		throw Error("oops something went wrong");
	}
};

export default Search;
