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

import CircularProgress from "@mui/material/CircularProgress";

import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import Search from "../fetch/Search";

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
	const [isLoading, setIsLoading] = useState(true);

	// fetch the feed data when the componenet first mounts
	useEffect(() => {
		const feedHandler = async () => {
			const results = await Search();

			console.log(results);
			setFeed(results);
			setIsLoading(false);
		};

		feedHandler();
	}, []);

	return (
		<Box
			flex={10}
			overflow="hidden"
			sx={{ backgroundColor: "#1D1D1D", height: "auto" }}
		>
			{/* <Navbar /> */}
			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Album
			</Typography>

			<Grid
				container
				flexDirection="row"
				spacing={1}
				justifyContent="space-around"
			>
				{/* check if feed exists and if it does map over the data  */}
				{feed && !isLoading ? (
					feed.albums.items.map(item => {
						return (
							<Link
								style={{ textDecoration: "none" }}
								to={`album/${item.data.uri}`}
								state={`${item.data.uri.split(":")[2]}`}
								key={item.data.uri}
							>
								<CustomGridItem
									key={item.data.uri}
									item
									xs="auto"
									sm="auto"
									md="auto"
									lg="auto"
									justifyContent="center"
									alignItems="center"
									display="flex"
									margin="10px 0"
								>
									<Card
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
								</CustomGridItem>
							</Link>
						);
					})
				) : (
					<Box
						sx={{
							backgroundColor: "#1D1D1D",
							flex: 1,
							height: "100vh",
							justifyContent: "center",
							display: "flex",
						}}
					>
						<CircularProgress />
					</Box>
				)}
			</Grid>
		</Box>
	);
};

export default Feed;
