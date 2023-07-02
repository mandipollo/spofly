import React from "react";
import { Provider } from "react-redux";
import store from "./state/store";

import theme from "./utilities/Theme";
import { ThemeProvider } from "@emotion/react";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import PlaylistPage from "./pages/PlaylistPage";

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
				element: <AlbumPage />,
			},
			{ path: "artist/:artistId", element: <ArtistPage /> },
			{
				path: "playlist/:playlistId",
				element: <PlaylistPage />,
			},
		],
	},
]);
const App = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={routes}></RouterProvider>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
