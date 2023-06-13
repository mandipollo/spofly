import React from "react";
import { Link } from "react-router-dom";
import {
	Box,
	CardContent,
	CardMedia,
	Typography,
	Card,
	Grid,
} from "@mui/material";

import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import Search from "../fetch/Search";
import FetchAlbum from "../fetch/FetchAlbum";

const CustomGridItem = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const CustomCardContent = styled(CardContent)({
	backgroundColor: "#262626",
	color: "white",
});

const Feed = () => {
	// useState to store the data fetched
	const [feed, setFeed] = useState(null);

	// fetch the feed data when the componenet first mounts
	useEffect(() => {
		const feedHandler = async () => {
			const results = await Search();

			console.log(results);
			setFeed(results);
		};

		feedHandler();
	}, []);

	const albumIdHanlder = async uri => {
		const id = uri.split(":")[2];
		const albumData = await FetchAlbum(id);
	};

	return (
		<Box flex={10} overflow="hidden" sx={{ backgroundColor: "#1D1D1D" }}>
			{/* <Navbar /> */}
			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Album
			</Typography>

			<Grid container flexDirection="row" spacing={2}>
				{/* check if feed exists and if it does map over the data  */}
				{feed ? (
					feed.albums.items.map(item => {
						return (
							<CustomGridItem
								key={item.data.uri}
								item
								xs={6}
								sm={4}
								md={4}
								lg={3}
								justifyContent="center"
								alignItems="center"
								display="flex"
							>
								<Link to={`album/${item.data.uri}`} state={`${item}`}>
									<Card
										onClick={async () => {
											albumIdHanlder(item.data.uri);
										}}
										sx={{
											width: "200px",
											height: "290px",
										}}
									>
										<CardMedia
											title="album"
											sx={{ height: "200px" }}
											image={item.data.coverArt.sources[0].url}
										/>
										<CustomCardContent>
											<Typography variant="h6">
												{item.data.artists.items[0].profile.name}
											</Typography>
											<Typography
												overflow="hidden"
												textOverflow="ellipsis"
												whiteSpace="nowrap"
												variant="body2"
												color="#A7A7A7"
											>
												{item.data.name}
											</Typography>
										</CustomCardContent>
									</Card>
								</Link>
							</CustomGridItem>
						);
					})
				) : (
					<Typography variant="h6">Loading...</Typography>
				)}
			</Grid>
		</Box>
	);
};

export default Feed;
