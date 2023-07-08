import React, { useEffect, useState } from "react";
import {
	Box,
	Grid,
	Tabs,
	Table,
	TableContainer,
	TableBody,
	Paper,
} from "@mui/material";

import TabPanel from "./TabPanel";
import StyledTab from "./styledComponents/StyledTab";
import { useTheme } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import searchInput from "../fetch/Search";
import GridLayoutAvatar from "./layouts/GridLayoutAvatar";
import GridLayout from "./layouts/GridLayout";
import ModuleTable from "./Table";
import { playTrackReducer } from "../state/playTrackSlice";

const Search = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedTab, setSelectedTab] = useState(0);

	// retrieve the state of the input
	const state = useSelector(state => state.input);

	//fetch the search input

	useEffect(() => {
		const id = setTimeout(async () => {
			const response = await searchInput(state);
			console.log(response);
			setData(response);
			setIsLoading(false);
		}, 500);

		return () => {
			clearTimeout(id);
		};
	}, [state]);

	//handle tabs change
	const handleChange = (props, index) => {
		setSelectedTab(index);
	};

	// hanlde track

	const handleSelectedTrack = track => {
		dispatch(playTrackReducer(track));
	};
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.base.base1,
				display: "flex",
				minHeight: "calc(100vh - 60px)",
				paddingBottom: "300px",
				paddingTop: "20px",
				flexDirection: "column",
			}}
		>
			<Tabs
				onChange={handleChange}
				value={selectedTab}
				aria-label="tab panel"
				TabIndicatorProps={{
					style: {
						height: 0,
					},
				}}
			>
				<StyledTab label="artists" />
				<StyledTab label="albums" />

				<StyledTab label="featured" />
				<StyledTab label="tracks" />
			</Tabs>
			{data && !isLoading && (
				<>
					<TabPanel value={selectedTab} index={0}>
						<Grid container flexDirection="row" spacing={1}>
							{data.artists.items.map(item => {
								return (
									<GridLayoutAvatar
										itemRoute={`/artist/${item.data.uri}`}
										itemState={item.data.uri.split(":")[2]}
										key={item.data.uri}
										itemProfileName={item.data.profile.name}
										itemCoverArt={item.data.visuals.avatarImage?.sources[0].url}
									/>
								);
							})}
						</Grid>
					</TabPanel>
					<TabPanel value={selectedTab} index={1}>
						<Grid container flexDirection="row" spacing={1}>
							{data.albums.items.map(item => {
								return (
									<GridLayout
										itemRoute={`/album/${item.data.uri}`}
										itemState={item.data.uri.split(":")[2]}
										key={item.data.uri}
										itemProfileName={item.data.name}
										itemCoverArt={item.data.coverArt.sources[0].url}
										itemName={item.data.artists.items[0].profile.name}
									/>
								);
							})}
						</Grid>
					</TabPanel>

					<TabPanel value={selectedTab} index={2}>
						<Grid container flexDirection="row" spacing={1}>
							{data.topResults.featured.map(item => {
								return (
									<GridLayout
										key={item.data.uri}
										itemProfileName={item.data.name}
										itemCoverArt={item.data.images.items[0].sources[0].url}
									/>
								);
							})}
						</Grid>
					</TabPanel>
					<TabPanel value={selectedTab} index={3}>
						<TableContainer
							component={Paper}
							sx={{
								background: "none",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								color: "#A7A7A7",
							}}
						>
							<Table sx={{ width: "90%", paddingTop: "10px" }}>
								<TableBody>
									{data.tracks.items.map((item, index) => {
										return (
											<ModuleTable
												albumArt={
													item.data.albumOfTrack.coverArt.sources[1].url
												}
												key={index}
												onClick={handleSelectedTrack}
												trackId={item.data.id}
												trackName={item.data.name}
												// onClick={handleSelectedTrack}
												trackDurationMs={item.data.duration.totalMilliseconds}
												trackUrl={item.preview_url}
											/>
										);
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</TabPanel>
				</>
			)}
			)
		</Box>
	);
};

export default Search;
