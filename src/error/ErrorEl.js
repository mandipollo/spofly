import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Box, Button } from "@mui/material";

const ErrorEl = () => {
	const error = useRouteError();
	return (
		<Box
			sx={{
				backgroundColor: "black",
				color: "white",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				minWidth: "100vw",
				flexDirection: "column",
			}}
		>
			<h2>{error.message}</h2>
			<Link style={{ textDecoration: "none", color: "inherit" }} to="/">
				<Button variant="outlined">Back to homepage</Button>
			</Link>
		</Box>
	);
};

export default ErrorEl;
