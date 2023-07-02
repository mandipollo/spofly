import React from "react";
import {
	AppBar,
	Button,
	Switch,
	Toolbar,
	Box,
	Icon,
	Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

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

	return (
		<>
			<CustomAppBar
				sx={{
					backgroundColor: theme.palette.base.base1,
				}}
			>
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
				<Box
					sx={{
						alignItems: "center",
						justifyContent: "flex-end",
						display: "flex",
						flex: 6,
					}}
				>
					<Switch></Switch>
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
