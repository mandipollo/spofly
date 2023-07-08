const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

// fetch playlist
app.get("/fetchPlaylist", (req, res) => {
	const { playlistId } = req.query;

	const options = {
		method: "GET",
		url: `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playlistId}&offset=0&limit=40`,
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
		params: {
			q: playlistId,
		},
	};

	axios
		.request(options)
		.then(response => {
			res.json(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});

// fetch feed data

app.get("/feed", (req, res) => {
	const apiKey = process.env.REACT_APP_API_KEY;

	const options = {
		method: "GET",
		url: `https://spotify23.p.rapidapi.com/search/?q=top&type=multi&offset=0&limit=10&numberOfTopResults=5`,
		headers: {
			"X-RapidAPI-Key": apiKey,
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(response => {
			res.json(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});

// fetch album

app.get("/fetchAlbum", (req, res) => {
	const { id } = req.query;
	const options = {
		method: "GET",
		params: {
			id: id,
		},
		url: `https://spotify23.p.rapidapi.com/albums/?ids=${id}`,
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(response => {
			res.json(response.data);
		})
		.then(error => {
			console.log(error);
		});
});

// fetch artist overview

app.get("/fetchArtistOverview", (req, res) => {
	const { artist } = req.query;

	const options = {
		method: "GET",
		params: {
			artist,
		},
		url: `https://spotify23.p.rapidapi.com/artist_overview/?id=${artist}`,
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(response => {
			res.json(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});

// search

app.get("/search", (req, res) => {
	const { searchQuery } = req.query;

	const options = {
		method: "GET",
		params: {
			searchQuery,
		},
		url: `https://spotify23.p.rapidapi.com/search/?q=${searchQuery}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(response => {
			res.json(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});
app.listen(8000, () => {
	console.log(`server is running on ${PORT}`);
});
