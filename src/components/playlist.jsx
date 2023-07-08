import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playTrackReducer } from "../state/playTrackSlice";

import {
	Box,
	CardContent,
	CardMedia,
	Typography,
	Paper,
	Table,
	TableContainer,
	TableRow,
	TableHead,
	TableBody,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LoadingBox from "./LoadingBox";
import StyledCard from "./styledComponents/StyledCard";
import StyledTableCell from "./styledComponents/StyledTableCell";
import FetchPlaylist from "../fetch/FetchPlaylist";
import { useTheme } from "@mui/material/styles";
import ModuleTable from "./Table";

const Playlist = props => {
	const dispatch = useDispatch();

	const theme = useTheme();
	// album id
	const data = props.state;

	const [isLoading, setIsLoading] = useState(true);
	// useState to set the fetched data
	const [playlistData, setPlaylistData] = useState(null);

	// fetch album data when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await FetchPlaylist(data.id);
				setPlaylistData(response);
				setIsLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchData();
	}, [data]);

	const handleSelectedTrack = track => {
		if (track) {
			dispatch(playTrackReducer(track));
		}
	};
	return (
		<>
			{!isLoading && playlistData ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						backgroundColor: "#7C91A5",
						minHeight: "100vh",
					}}
				>
					<StyledCard
						theme={theme}
						sx={{
							background: "linear-gradient(to right bottom,#7D92A6, #4B5763)",
						}}
					>
						{playlistData && (
							<Paper
								elevation={3}
								sx={{
									margin: 5,
									boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
								}}
							>
								<CardMedia
									component="img"
									alt="image"
									sx={{
										height: {
											xs: "auto",
											sm: "auto",
											md: "300px",
											lg: "300px",
											xl: "700px",
										},
									}}
									src={data.images.items[0].sources[0].url}
								></CardMedia>
							</Paper>
						)}

						<Paper
							sx={{
								flex: 1,
								marginRight: 5,
								height: 300,
								// display: "flex",
								color: "#A7A7A7",
								backgroundColor: "#1D1D1D",
								display: { xs: "none", sm: "flex" },
							}}
						>
							{playlistData && (
								<CardContent
									sx={{
										flex: 1,
										flexDirection: "column",
										justifyContent: "space-around",
										height: "auto",
										display: { xs: "none", sm: "flex" },
									}}
								>
									<Typography variant="body2">Playlist</Typography>
									<Typography color="white" variant="h6">
										{data.name}
									</Typography>
									<Typography variant="body2">
										{playlistData.items.length} Tracks
									</Typography>

									<Typography variant="h6">{data.description}</Typography>
								</CardContent>
							)}
						</Paper>
					</StyledCard>
					<Box
						sx={{
							justifyContent: "center",
							alignItems: "center",
							flex: 1,
							display: "flex",
							background: "linear-gradient(to bottom right, #37404A,#121212)",
							paddingBottom: "200px",
						}}
					>
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
							<Table sx={{ width: "90%" }}>
								<TableHead>
									<TableRow>
										<StyledTableCell align="left">#</StyledTableCell>
										<StyledTableCell align="left">Title</StyledTableCell>
										<StyledTableCell align="left">
											<AccessTimeIcon />
										</StyledTableCell>
									</TableRow>
								</TableHead>

								{playlistData && (
									<TableBody>
										{playlistData.items.map((item, index) => {
											return (
												<ModuleTable
													key={item.track.id}
													index={index}
													trackId={item.track.id}
													trackName={item.track.name}
													trackNumber={index + 1}
													onClick={handleSelectedTrack}
													trackDurationMs={item.track.duration_ms}
													trackUrl={item.track.preview_url}
												/>
											);
										})}
									</TableBody>
								)}
							</Table>
						</TableContainer>
					</Box>
				</Box>
			) : (
				<LoadingBox />
			)}
		</>
	);
};

export default Playlist;
