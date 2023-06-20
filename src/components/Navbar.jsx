import React from "react";
import { AppBar, Button, Switch, Toolbar, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	top: 0,
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
	justifyContent: "flex-end",
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
				<Toolbar>
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
				</Toolbar>
			</CustomAppBar>
		</>
	);
};

export default Navbar;
