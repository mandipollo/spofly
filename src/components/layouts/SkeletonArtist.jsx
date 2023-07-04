import React from "react";
import {
	Paper,
	Card,
	CardContent,
	Typography,
	Table,
	TableContainer,
	TableBody,
	Skeleton,
	TableHead,
	TableRow,
	Grid,
	Box,
	Tabs,
} from "@mui/material";
import StyledTab from "../styledComponents/StyledTab";
import StyledTableCell from "../styledComponents/StyledTableCell";
const SkeletonArtist = () => {
	return (
		<>
			<Paper square elevation={4}>
				<Card
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
						backgroundColor: "#323942",
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
							<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
						</Typography>

						<Typography color="#A7A7A7" variant="body1">
							<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
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
					<TableHead>
						<TableRow>
							<StyledTableCell align="left">#</StyledTableCell>
							<StyledTableCell align="left">Title</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody></TableBody>
				</Table>
			</TableContainer>

			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				Discography
			</Typography>
			<Box sx={{ color: "white" }}>
				{/* <Tabs
					aria-label="basic tabs example"
					TabIndicatorProps={{
						style: {
							height: 0,
						},
					}}
				>
					<StyledTab label="Albums" />
					<StyledTab label="Singles" />
					<StyledTab label="Compilations" />
				</Tabs> */}

				<Skeleton variant="rectangular" width={300} height={300} />
			</Box>
			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
			</Typography>
			<Box>
				<Grid container flexDirection="row" spacing={1}></Grid>
			</Box>

			<Typography sx={{ margin: "20px" }} variant="h6" color="white">
				About
			</Typography>
		</>
	);
};

export default SkeletonArtist;
