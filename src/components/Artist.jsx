import React, { useState, useEffect } from "react";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Paper,
} from "@mui/material";
import FetchArtistOverview from "../fetch/FetchArtistOverview";

// fetch and display artist overview
const Artist = props => {
	const [artistOverview, setArtistOverview] = useState(null);
	const artistId = props.data;

	useEffect(() => {
		const fetchData = async () => {
			const response = await FetchArtistOverview(artistId);

			console.log(response);
			setArtistOverview(response);
		};

		fetchData();
	}, [artistId]);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "calc(100vh - 60px)",
				backgroundColor: "#7C91A5",
			}}
		>
			{artistOverview && (
				<Paper square elevation={4}>
					<Card
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							backgroundImage: `url(${artistOverview.data.artist.visuals.headerImage.sources[0].url} )`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							height: {
								xs: "auto",
								sm: "auto",
								md: "300px",

								lg: "300px",
								xl: "700px",
							},
							color: "white",
						}}
					>
						<CardContent>
							<Typography gutterBottom variant="h2" component="div">
								{artistOverview.data.artist.profile.name}
							</Typography>

							<Typography color="#A7A7A7" variant="body1">
								{artistOverview.data.artist.stats.monthlyListeners.toLocaleString()}{" "}
								monthly listeneres
							</Typography>
						</CardContent>
					</Card>
				</Paper>
			)}
		</Box>
	);
};

export default Artist;
