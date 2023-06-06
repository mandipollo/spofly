import React from "react";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useTheme } from "@emotion/react";

const Sidebar = () => {
	const theme = useTheme();
	return (
		<Box flex={1} padding={2}>
			<Box position="fixed">
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<PlayCircleIcon sx={{ width: "60px", height: "60px" }} />
							</ListItemIcon>
							<ListItemText
								primary="Spofly"
								primaryTypographyProps={{ fontSize: "30px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<SearchIcon />
							</ListItemIcon>
							<ListItemText primary="Search" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<LibraryAddIcon />
							</ListItemIcon>
							<ListItemText primary="Library" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<PlaylistAddIcon />
							</ListItemIcon>
							<ListItemText primary="Create Playlist" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<FavoriteBorderIcon />
							</ListItemIcon>
							<ListItemText primary="Liked Songs" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
