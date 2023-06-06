import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Card from "./Card";

const Feed = () => {
	return (
		<Box flex={6}>
			<Navbar />

			<Box flexGrow={1}></Box>
		</Box>
	);
};

export default Feed;
