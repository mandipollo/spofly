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
import Variants from "./layouts/Skeleton";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playTrackReducer } from "../state/playTrackSlice";
import Search from "../fetch/Search";
import LoadingBox from "./LoadingBox";
import StyledGridItem from "./styledComponents/StyledGridItem";
import StyledCardContent from "./styledComponents/StyledCardContent";

const Feed = () => {
	const skeletonArray = Array.from({ length: 10 });
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
			{feed && !isLoading ? (
				<>
					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Album
					</Typography>
					<Grid container flexDirection="row" spacing={1}>
						{feed.albums.items.map(item => {
							return (
								<React.Fragment key={item.data.uri}>
									<StyledGridItem key={item.data.uri} item>
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
												<StyledCardContent>
													<Typography
														overflow="hidden"
														textOverflow="ellipsis"
														whiteSpace="nowrap"
														variant="h6"
													>
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
												</StyledCardContent>
											</Card>
										</Link>
									</StyledGridItem>
								</React.Fragment>
							);
						})}
					</Grid>
					)
					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Artists
					</Typography>
					<Grid container flexDirection="row" spacing={1}>
						{feed.artists.items.map(item => {
							return (
								<React.Fragment key={item.data.uri}>
									<StyledGridItem key={`artist${item.data.uri}`} item>
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
												<StyledCardContent>
													<Typography variant="h6">
														{item.data.profile.name}
													</Typography>
												</StyledCardContent>
											</Card>
										</Link>
									</StyledGridItem>
								</React.Fragment>
							);
						})}
					</Grid>
					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Playlist
					</Typography>
					<Grid container flexDirection="row" spacing={1}>
						{feed.playlists.items.map(item => {
							return (
								<React.Fragment key={item.data.uri}>
									<StyledGridItem key={`track${item.data.uri}`} item>
										<Link
											style={{ textDecoration: "none" }}
											to={`/playlist/${item.data.uri}`}
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
													image={item.data.images.items[0].sources[0].url}
												/>
												<StyledCardContent>
													<Typography
														overflow="hidden"
														textOverflow="ellipsis"
														whiteSpace="nowrap"
														variant="h6"
													>
														{item.data.name}
													</Typography>
													<Typography
														overflow="hidden"
														textOverflow="ellipsis"
														whiteSpace="nowrap"
														variant="body2"
														color="#A7A7A7"
													>
														{item.data.description}
													</Typography>
												</StyledCardContent>
											</Card>
										</Link>
									</StyledGridItem>
								</React.Fragment>
							);
						})}
					</Grid>
				</>
			) : (
				<Grid container flexDirection="row" spacing={1} wrap="wrap">
					{skeletonArray.map((_, index) => {
						return (
							<StyledGridItem key={index} item>
								<Variants />
							</StyledGridItem>
						);
					})}
				</Grid>
			)}
		</Box>
	);
};

export default Feed;
