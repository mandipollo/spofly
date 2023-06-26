import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingBox = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				backgroundColor: "#1D1D1D",
				height: "100vh",
			}}
		>
			<CircularProgress />
		</Box>
	);
};
export default LoadingBox;
