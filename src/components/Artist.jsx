import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Box,
	Card,
	CardContent,
	Typography,
	Paper,
	Grid,
	CardMedia,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { TableContainer, TableBody, Table, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import StyledTab from "./styledComponents/StyledTab";
import GridLayout from "./layouts/GridLayout";
import removeAnchorTags from "../utilities/removeAnchorTags";
import ModuleTable from "./Table";
import SkeletonArtist from "./layouts/SkeletonArtist";
import { playTrackReducer } from "../state/playTrackSlice";

// fetch and display artist overview
const Artist = props => {
	const dispatch = useDispatch();
	// store tab index
	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (newValue, index) => {
		setSelectedTab(index);
	};

	// store artist data
	const [artistOverview, setArtistOverview] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const artistId = props.data;

	useEffect(() => {
		// const fetchData = async () => {
		// 	try {
		// 		const response = await FetchArtistOverview(artistId);
		// 		console.log(response);
		// 		setArtistOverview(response);
		// 		setIsLoading(false);
		// 	} catch (error) {
		// 		throw Error("seomething went wrong !");
		// 	}
		// };

		// fetchData();

		const options = {
			method: "GET",
			url: `http://localhost:8000/fetchArtistOverview?artist=${artistId}`,
		};

		axios
			.request(options)
			.then(response => {
				setArtistOverview(response.data);
				setIsLoading(false);
			})
			.catch(error => {
				console.log(error);
			});
	}, [artistId]);

	const handleTrack = track => {
		dispatch(playTrackReducer(track));
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "calc(100vh - 60px)",
				background: "linear-gradient(to bottom right, #37404A,#121212)",
				paddingBottom: "300px",
			}}
		>
			{artistOverview && !isLoading ? (
				<>
					<Paper square elevation={4}>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-end",
								backgroundImage: `url(${
									artistOverview.data.artist.visuals.headerImage.sources[0]
										?.url || ""
								} )`,
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
									{artistOverview.data.artist.stats.monthlyListeners.toLocaleString()}
									monthly listeneres
								</Typography>
							</CardContent>
						</Card>
					</Paper>

					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Popular
					</Typography>

					<TableContainer
						sx={{
							background: "none",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "#A7A7A7",
						}}
					>
						<Table sx={{ width: "90%" }}>
							{artistOverview && (
								<TableBody>
									{artistOverview.data.artist.discography.topTracks.items.map(
										item => {
											return (
												<ModuleTable
													key={item.track.id}
													albumArt={item.track.album.coverArt.sources[0].url}
													trackId={item.track.id}
													trackName={item.track.name}
													trackNumber={item.track_number}
													trackDurationMs={
														item.track.duration.totalMilliseconds
													}
													trackUrl={item.preview_url}
													onClick={handleTrack}
												/>
											);
										}
									)}
								</TableBody>
							)}
						</Table>
					</TableContainer>

					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Discography
					</Typography>
					<Box sx={{ color: "white" }}>
						<Tabs
							value={selectedTab}
							onChange={handleChange}
							aria-label="tab panel"
							TabIndicatorProps={{
								style: {
									height: 0,
								},
							}}
						>
							<StyledTab label="Albums" />
							<StyledTab label="Singles" />
							<StyledTab label="Compilations" />
						</Tabs>

						<TabPanel value={selectedTab} index={0}>
							<Grid container flexDirection="row" spacing={1}>
								{artistOverview.data.artist.discography.albums.items.map(
									item => {
										return (
											<GridLayout
												key={item.releases.items[0].uri}
												itemRoute={`/album/${item.releases.items[0].uri}`}
												itemState={item.releases.items[0].uri.split(":")[2]}
												itemId={item.releases.items[0].id}
												itemCoverArt={
													item.releases.items[0].coverArt.sources[0].url
												}
												itemProfileName={item.releases.items[0].name}
											/>
										);
									}
								)}
							</Grid>
						</TabPanel>
						<TabPanel value={selectedTab} index={1}>
							<Grid container flexDirection="row" spacing={1}>
								{artistOverview.data.artist.discography.singles.items.map(
									item => {
										return (
											<GridLayout
												itemRoute={`/album/${item.releases.items[0].uri}`}
												itemState={item.releases.items[0].uri.split(":")[2]}
												key={item.releases.items[0].id}
												itemId={item.releases.items[0].id}
												itemCoverArt={
													item.releases.items[0].coverArt.sources[0].url
												}
												itemProfileName={item.releases.items[0].name}
											/>
										);
									}
								)}
							</Grid>
						</TabPanel>
						<TabPanel value={selectedTab} index={2}>
							<Grid container flexDirection="row" spacing={1}>
								{artistOverview.data.artist.discography.compilations.items.map(
									item => {
										return (
											<GridLayout
												itemRoute={`/album/${item.releases.items[0].uri}`}
												itemState={item.releases.items[0].uri.split(":")[2]}
												key={item.releases.items[0].id}
												itemId={item.releases.items[0].id}
												itemCoverArt={
													item.releases.items[0].coverArt.sources[0].url
												}
												itemProfileName={item.releases.items[0].name}
											/>
										);
									}
								)}
							</Grid>
						</TabPanel>
					</Box>
					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						Featuring {artistOverview.data.artist.profile.name}
					</Typography>
					<Box>
						<Grid container flexDirection="row" spacing={1}>
							{artistOverview.data.artist.relatedContent.featuring.items.map(
								item => {
									return (
										<GridLayout
											itemRoute={`/playlist/${item.uri}`}
											itemState={item}
											key={item.id}
											itemId={item.id}
											itemCoverArt={item.images.items[0].sources[0].url}
											itemProfileName={item.name}
										/>
									);
								}
							)}
						</Grid>
					</Box>

					<Typography sx={{ margin: "20px" }} variant="h6" color="white">
						About
					</Typography>
					<Box>
						<Grid
							container
							flexDirection="row"
							spacing={1}
							justifyContent="center"
							alignItems="center"
						>
							<Paper
								square
								elevation={4}
								sx={{
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									backgroundColor: "inherit",
								}}
							>
								<Card
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										width: "90%",
										color: "white",
										backgroundColor: "inherit",
									}}
								>
									<CardMedia
										title="artist"
										sx={{
											height: {
												xs: "200px",
												sm: "200px",
												md: "400px",
												lg: "600px",
												xl: "800px",
											},
											width: "100%",
										}}
										image={
											artistOverview.data.artist.visuals.gallery.items[0]
												.sources[0].url
										}
									/>

									<CardContent>
										<Typography gutterBottom variant="h2" component="div">
											{artistOverview.data.artist.profile.name}
										</Typography>

										<Typography color="white" variant="body1">
											{artistOverview.data.artist.stats.monthlyListeners.toLocaleString()}{" "}
											monthly listeneres
										</Typography>
										<Typography color="white" variant="body1">
											{removeAnchorTags(
												`${artistOverview.data.artist.profile.biography.text}`
											)}
										</Typography>
									</CardContent>
								</Card>
							</Paper>
						</Grid>
					</Box>
				</>
			) : (
				<SkeletonArtist />
			)}
		</Box>
	);
};

export default Artist;
