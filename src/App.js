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
import SearchPage from "./pages/SearchPage";
import ErrorEl from "./error/ErrorEl";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorEl />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "album/:albumId",
				element: <AlbumPage />,
			},
			{
				path: "artist/:artistId",
				element: <ArtistPage />,
			},
			{
				path: "playlist/:playlistId",
				element: <PlaylistPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
		],
	},
	{
		path: "signup",
		element: <SignupPage />,
	},
	{ path: "login", element: <LoginPage /> },
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
