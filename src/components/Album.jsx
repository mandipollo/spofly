import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";
import FetchAlbum from "../fetch/FetchAlbum";
const StyledCard = styled(Card)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

const Album = props => {
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
		<Box>
			<Box>
				<StyledCard>
					<CardMedia component="img" alt="image"></CardMedia>
					<CardContent></CardContent>
				</StyledCard>
			</Box>
			<Box sx={{ justifyContent: "center", alignItems: "center" }}>
				<Typography variant="h6">tracks</Typography>
			</Box>
		</Box>
	);
};

export default Album;
