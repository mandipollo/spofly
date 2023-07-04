import React from "react";
import {
	AppBar,
	Button,
	Box,
	Typography,
	TextField,
	InputAdornment,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	top: 0,
	width: "100%",
	minHeight: 64,

	[theme.breakpoints.up("md")]: {
		left: "250px",
		width: `calc(100% - 250px)`,
	},
	[theme.breakpoints.down("md")]: {
		left: 0,
		width: "100%",
	},
	display: "flex",
	flexDirection: "row",
	overflow: "hidden",
}));
const Navbar = () => {
	const theme = useTheme();
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<>
			<CustomAppBar
				sx={{
					backgroundColor: theme.palette.base.base1,
				}}
			>
				{pathname === "/search" ? (
					<Box
						sx={{
							justifyContent: "center",
							alignItems: "center",
							display: "flex",
							flex: 6,
							margin: "0 10px",
						}}
					>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon sx={{ color: "#D8D8D8" }} />
									</InputAdornment>
								),
							}}
							size="small"
							variant="outlined"
							placeholder="artist, album, tracks ?"
							sx={{
								width: "70%",
								"& .MuiOutlinedInput-root": {
									// Customizing the input element
									color: "#757575",
									borderRadius: "1rem",
									outline: "none",
									backgroundColor: "#242424",
									border: "1px solid #242424 ",
									"&:hover": {
										backgroundColor: "#242424",
										outline: "0.1px solid gray",
									},
									"&.Mui-focused": {
										backgroundColor: "#242424",
										border: "1px solid white",
									},
									"& fieldset": {
										border: "none",
									},
								},
							}}
						/>
					</Box>
				) : (
					<Box
						sx={{
							justifyContent: "flex-start",
							alignItems: "center",
							display: "flex",
							flex: 6,
							margin: "0 10px",
						}}
					>
						<PauseCircleOutlineIcon
							sx={{
								display: { xs: "none", sm: "block" },
								color: "green",
								m: "0 10px",
							}}
						/>
						<Typography variant="h6" color="green" justifySelf="flex-start">
							Musbrary
						</Typography>
					</Box>
				)}

				<Box
					sx={{
						alignItems: "center",
						justifyContent: "flex-end",
						display: "flex",
						flex: 6,
					}}
				>
					<Button sx={{ marginRight: 6 }} variant="text">
						Sign up
					</Button>
					<Button
						size="large"
						sx={{ borderRadius: 3 }}
						variant="contained"
						color="success"
					>
						Log In
					</Button>
				</Box>
			</CustomAppBar>
		</>
	);
};

export default Navbar;
