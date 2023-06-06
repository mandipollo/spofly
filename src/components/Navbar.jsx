import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
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
			}}
		>
			<Toolbar>
				<Button variant="text">Sign up</Button>
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
