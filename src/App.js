import React from "react";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import theme from "./utilities/Theme";
import { ThemeProvider } from "@emotion/react";
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Stack display="flex" justifyContent="space-around" direction="row">
					<Sidebar />
					<Feed />
				</Stack>
			</Box>
		</ThemeProvider>
	);
};

export default App;
