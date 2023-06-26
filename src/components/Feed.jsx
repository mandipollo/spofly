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
import { useDispatch } from "react-redux";
import { playTrackReducer } from "../state/playTrackSlice";
import Search from "../fetch/Search";

const CustomGridItem = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	justifyContent: "center",
	alignItems: "center",
	display: "flex",
	margin: "20px 20px",
});

const CustomCardContent = styled(CardContent)({
	backgroundColor: "#262626",
	color: "white",
});

const Feed = () => {
	const dispatch = useDispatch();
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

	// dispatch the track to the player state

	const handleSelectedTrack = track => {
		dispatch(playTrackReducer(track));
	};
	return (
		<Box
			flex={10}
			overflow="hidden"
			sx={{
				backgroundColor: "#1D1D1D",
				height: "auto",
				paddingBottom: "200px",
				minHeight: "calc(100vh - 60px)",
			}}
		>
			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Album
			</Typography>

			<Grid container flexDirection="row" spacing={1}>
				{/* check if feed exists and if it does map over the data  */}
				{feed && !isLoading ? (
					feed.albums.items.map(item => {
						return (
							<>
								<CustomGridItem key={item.data.uri} item>
									<Link
										style={{ textDecoration: "none" }}
										to={`album/${item.data.uri}`}
										state={`${item.data.uri.split(":")[2]}`}
										key={item.data.uri}
									>
										<Card
											sx={{
												width: "200px",
												height: "290px",
												backgroundColor: "#262626",
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
							</>
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

			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Artists
			</Typography>

			<Grid container flexDirection="row" spacing={1}>
				{/* check if feed exists and if it does map over the data  */}
				{feed && !isLoading ? (
					feed.artists.items.map(item => {
						return (
							<>
								<CustomGridItem key={item.data.uri}>
									<Link
										style={{ textDecoration: "none" }}
										to={`artist/${item.data.uri}`}
										state={`${item.data.uri.split(":")[2]}`}
										key={item.data.uri}
									>
										<Card
											sx={{
												width: "200px",
												height: "290px",
												backgroundColor: "#262626",
											}}
										>
											<CardMedia
												title="album"
												sx={{ height: "200px" }}
												image={item.data.visuals.avatarImage.sources[2].url}
											/>
											<CustomCardContent>
												<Typography variant="h6">
													{item.data.profile.name}
												</Typography>
											</CustomCardContent>
										</Card>
									</Link>
								</CustomGridItem>
							</>
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
			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Tracks
			</Typography>

			<Grid container flexDirection="row" spacing={1}>
				{/* check if feed exists and if it does map over the data  */}
				{feed && !isLoading ? (
					feed.tracks.items.map(item => {
						return (
							<>
								<CustomGridItem key={item.data.uri} item>
									<Link
										style={{ textDecoration: "none" }}
										// to={`album/${item.data.uri}`}
										// state={`${item.data.uri.split(":")[2]}`}
										key={item.data.uri}
									>
										<Card
											sx={{
												width: "200px",
												height: "290px",
												backgroundColor: "#262626",
											}}
										>
											<CardMedia
												title="album"
												sx={{ height: "200px" }}
												image={item.data.albumOfTrack.coverArt.sources[0].url}
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
							</>
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
