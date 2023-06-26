import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Paper, Grid } from "@mui/material";
import FetchArtistOverview from "../fetch/FetchArtistOverview";
import LoadingBox from "./LoadingBox";
import { TableContainer, TableBody, Table, Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";
import StyledTab from "./styledComponents/StyledTab";

import ModuleTable from "./Table";

// fetch and display artist overview
const Artist = props => {
	// store tab index
	const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (value, index) => {
		setSelectedTab(index);
	};

	// store artist data
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
				background: "linear-gradient(to bottom right, #37404A,#121212)",
				paddingBottom: "300px",
			}}
		>
			{artistOverview && (
				<>
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
													albumArt={item.track.album.coverArt.sources[0].url}
													trackId={item.track.id}
													trackName={item.track.name}
													trackNumber={item.track_number}
													trackDurationMs={
														item.track.duration.totalMilliseconds
													}
													trackUrl={item.preview_url}
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
					<Box sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}>
						<Tabs
							value={selectedTab}
							onChange={handleChange}
							aria-label="basic tabs example"
							TabIndicatorProps={{
								style: {
									height: 0,
								},
							}}
						>
							<StyledTab label="Albums" />
							<StyledTab label="Singles" />
							<StyledTab label="Concerts" />
						</Tabs>

						<TabPanel value={selectedTab} index={0}>
							<Grid container flexDirection="row" spacing={1}>
								{/* {feed.albums.items.map(item => {
									return (
										<>
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
											</StyledGridItem>
										</>
									);
								})} */}
							</Grid>
						</TabPanel>
						<TabPanel value={selectedTab} index={1}>
							tab2
						</TabPanel>
						<TabPanel value={selectedTab} index={2}>
							tab3
						</TabPanel>
					</Box>
				</>
			)}
		</Box>
	);
};

export default Artist;
