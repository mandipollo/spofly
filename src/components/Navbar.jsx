import React from "react";
import { AppBar, Button, IconButton, Switch, Toolbar } from "@mui/material";
import { useTheme } from "@emotion/react";

const Navbar = () => {
	const theme = useTheme();

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: theme.palette.base.base1,
				display: "flex",
				justifyContent: "flex-end",
				flexDirection: "row",
				overflow: "hidden",
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
		</AppBar>
	);
};

export default Navbar;
