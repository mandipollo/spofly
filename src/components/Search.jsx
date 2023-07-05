import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Tabs, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import StyledTab from "./styledComponents/StyledTab";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import searchInput from "../fetch/Search";
import GridLayoutAvatar from "./layouts/GridLayoutAvatar";
import GridLayout from "./layouts/GridLayout";
const Search = () => {
	const theme = useTheme();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedTab, setSelectedTab] = useState(0);

	// retrieve the state of the input
	const state = useSelector(state => state.input);

	const prevRef = useRef(state);

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
				<StyledTab label="episodes" />
				<StyledTab label="playlists" />
				<StyledTab label="podcast" />
				<StyledTab label="top results" />
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
						<Typography variant="h6">3</Typography>
					</TabPanel>
					<TabPanel value={selectedTab} index={3}>
						<Typography variant="h6">4</Typography>
					</TabPanel>
					<TabPanel value={selectedTab} index={4}>
						<Typography variant="h6">5</Typography>
					</TabPanel>
					<TabPanel value={selectedTab} index={5}>
						<Typography variant="h6">6</Typography>
					</TabPanel>
					<TabPanel value={selectedTab} index={6}>
						<Typography variant="h6">7</Typography>
					</TabPanel>
				</>
			)}
			)
		</Box>
	);
};

export default Search;
