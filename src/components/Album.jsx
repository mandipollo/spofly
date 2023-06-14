import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Paper,
} from "@mui/material";
import styled from "@emotion/styled";
import FetchAlbum from "../fetch/FetchAlbum";
import { useTheme } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	margin: 30,
	color: "white",
}));

const Album = props => {
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
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchData();
	}, [data]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#1D1D1D",
			}}
		>
			<StyledCard
				theme={theme}
				sx={{
					background: "linear-gradient(to right bottom, #7C91A5, #4C5864)",
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
						display: "flex",
						color: "#A7A7A7",
						backgroundColor: "#1D1D1D",
					}}
				>
					<CardContent
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							justifyContent: "space-around",
							height: "auto",
						}}
					>
						<Typography variant="body2">Album</Typography>
						<Typography color="white" variant="h2">
							{albumData.albums[0].name}
						</Typography>
						<Typography variant="body2">
							{albumData.albums[0].tracks.items.length} Tracks
						</Typography>
					</CardContent>
				</Paper>
			</StyledCard>
			<Box
				sx={{
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#1D1D1D",
					flex: 1,
				}}
			>
				<Typography variant="h6">tracks</Typography>
			</Box>
		</Box>
	);
};

export default Album;
