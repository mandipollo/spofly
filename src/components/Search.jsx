import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Search = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: theme.palette.base.base1,
				height: "calc(100vh - 67px)",
				width: "100vw",
			}}
		></Box>
	);
};

export default Search;
