import {
	Skeleton,
	Paper,
	CardContent,
	Typography,
	Box,
	Table,
	TableBody,
	TableHead,
	TableContainer,
	TableRow,
} from "@mui/material";
import StyledCard from "../styledComponents/StyledCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyledTableCell from "../styledComponents/StyledTableCell";
import { useTheme } from "@mui/material/styles";
const SkeletonAlbum = () => {
	const theme = useTheme();
	return (
		<>
			<StyledCard
				theme={theme}
				sx={{
					background: "linear-gradient(to right bottom,#7D92A6, #4B5763)",
				}}
			>
				<Paper
					elevation={3}
					sx={{
						margin: 5,
						boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
					}}
				>
					<Skeleton
						sx={{ backgroundColor: "gray" }}
						variant="rounded"
						width={300}
						height={300}
					/>
				</Paper>

				<Paper
					sx={{
						flex: 1,
						marginRight: 5,
						height: 300,
						display: "flex",
						color: "#A7A7A7",
						backgroundColor: "#1D1D1D",
						display: { xs: "none", sm: "flex" },
					}}
				>
					<CardContent
						sx={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "space-around",
							height: "auto",
							display: { xs: "none", sm: "flex" },
						}}
					>
						<Typography variant="body2">
							<Skeleton
								variant="text"
								width={200}
								sx={{ fontSize: "1rem", backgroundColor: "gray" }}
							/>
						</Typography>
						<Typography color="white" variant="h2">
							<Skeleton
								variant="text"
								sx={{ fontSize: "1rem", backgroundColor: "gray" }}
								width={200}
							/>
						</Typography>
						<Typography variant="body2">
							<Skeleton
								width={200}
								sx={{ fontSize: "1rem", backgroundColor: "gray" }}
								variant="text"
							/>
						</Typography>
					</CardContent>
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

						<TableBody>
							<TableRow
								sx={{
									border: 0,
									color: "#A7A7A7",
									"&:hover": {
										backgroundColor: "#4B5763",
									},
								}}
							>
								<StyledTableCell>
									<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
								</StyledTableCell>

								<StyledTableCell align="left">
									<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
								</StyledTableCell>
								<StyledTableCell align="left">
									<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
								</StyledTableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
};

export default SkeletonAlbum;
