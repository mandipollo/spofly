import React from "react";

import theme from "./utilities/Theme";
import { ThemeProvider } from "@emotion/react";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import Album from "./pages/Album";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "album/:albumId",
				element: <Album />,
			},
		],
	},
]);
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={routes}></RouterProvider>
		</ThemeProvider>
	);
};

export default App;
