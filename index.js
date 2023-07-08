const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.json("hi");
});

// fetch album data

app.get("/news", (req, res) => {
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

app.listen(8000, () => {
	console.log(`server is running on ${PORT}`);
});
