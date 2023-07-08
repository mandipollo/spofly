import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playTrackReducer } from "../state/playTrackSlice";

import {
	Button,
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
	Avatar,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import StyledCard from "./styledComponents/StyledCard";
import StyledTableCell from "./styledComponents/StyledTableCell";
import FetchAlbum from "../fetch/FetchAlbum";
import { useTheme } from "@mui/material/styles";
import ModuleTable from "./Table";
import SkeletonAlbum from "./layouts/SkeletonAlbum";
const Album = props => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);
	const theme = useTheme();
	// album id
	const data = props.data;

	// useState to set the fetched data
	const [albumData, setAlbumData] = useState(null);

	// fetch album data when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await FetchAlbum(data);
				console.log(response);
				setAlbumData(response);
				setIsLoading(false);
			} catch (error) {
				throw Error("cannot fetch the data!");
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
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#7C91A5",
				minHeight: "100vh",
			}}
		>
			{albumData && !isLoading ? (
				<>
					<StyledCard
						theme={theme}
						sx={{
							background: "linear-gradient(to right bottom,#7D92A6, #4B5763)",
						}}
					>
						{albumData && (
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
									src={albumData.albums[0].images[1].url}
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
							{albumData && (
								<CardContent
									sx={{
										flex: 1,
										flexDirection: "column",
										justifyContent: "space-around",
										height: "auto",
										display: { xs: "none", sm: "flex" },
									}}
								>
									<Typography variant="body2">Album</Typography>
									<Typography color="white" variant="h6">
										{albumData.albums[0].name}
									</Typography>
									<Typography variant="body2">
										{albumData.albums[0].tracks.items.length} Tracks
									</Typography>

									<Avatar
										variant="circle"
										src={albumData.albums[0].images[2].url}
									/>

									<Link
										style={{ textDecoration: "none", color: "white" }}
										to={`/artist/${albumData.albums[0].artists[0].uri}`}
										state={`${albumData.albums[0].artists[0].id}`}
									>
										<Button
											size="large"
											sx={{ borderRadius: 3 }}
											variant="contained"
											color="success"
										>
											<Typography variant="h6">
												{albumData.albums[0].artists[0].name}
											</Typography>
										</Button>
									</Link>
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

								{albumData && (
									<TableBody>
										{albumData.albums[0].tracks.items.map((item, index) => {
											return (
												<ModuleTable
													key={`${item.id}-${index}`}
													index={index}
													trackId={item.id}
													trackName={item.name}
													trackNumber={item.track_number}
													onClick={handleSelectedTrack}
													trackDurationMs={item.duration_ms}
													trackUrl={item.preview_url}
												/>
											);
										})}
									</TableBody>
								)}
							</Table>
						</TableContainer>
					</Box>
				</>
			) : (
				<SkeletonAlbum />
			)}
		</Box>
	);
};

export default Album;
