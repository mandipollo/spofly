import React from "react";
import {
	Box,
	CardContent,
	CardMedia,
	Typography,
	Card,
	Grid,
} from "@mui/material";
import Navbar from "./Navbar";
import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import Search from "../fetch/Search";

const CustomGridItem = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const CustomCardContent = styled(CardContent)({
	backgroundColor: "#30475E",
	color: "white",
});

const Feed = () => {
	const [feed, setFeed] = useState([]);
	useEffect(() => {
		const feedHandler = async () => {
			const results = await Search();

			console.log(results);
			setFeed(results);
		};

		feedHandler();
	}, []);

	return (
		<Box flex={8} overflow="hidden" sx={{ backgroundColor: "#191919" }}>
			<Navbar />
			<Typography sx={{ margin: "20px" }} variant="h4" color="green">
				{feed.length > 0 ? feed.albums.items[0].data.name : "no"}
			</Typography>

			<Grid container flexDirection="row" spacing={2}>
				{feed.albums.items.map(item => {
					return (
						<CustomGridItem
							item
							xs={6}
							md={4}
							lg={3}
							justifyContent="center"
							alignItems="center"
							display="flex"
						>
							<Card
								sx={{
									width: "200px",
									height: "300px",
								}}
							>
								<CardMedia
									title="album"
									sx={{ height: "200px" }}
									image={item.data.coverArt.sources[0].url}
								/>
								<CustomCardContent>
									<Typography variant="h6"> Focus</Typography>
									<Typography flexWrap={true} variant="body1">
										{item.data.name}
									</Typography>
								</CustomCardContent>
							</Card>
						</CustomGridItem>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Feed;
