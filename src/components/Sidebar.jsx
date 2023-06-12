import React from "react";
import {
	Box,
	Button,
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

const Sidebar = () => {
	return (
		<Box
			flex={1.5}
			padding={2}
			sx={{
				backgroundColor: "black",
				color: "white",
				display: { xs: "none", md: "block", lg: "block" },
			}}
		>
			<Box>
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon>
								<PlayCircleIcon
									sx={{ width: "60px", height: "60px", color: "white" }}
								/>
							</ListItemIcon>
							<ListItemText
								primary="Spofly"
								primaryTypographyProps={{ fontSize: "30px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon sx={{ color: "white" }}>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon sx={{ color: "white" }}>
								<SearchIcon />
							</ListItemIcon>
							<ListItemText primary="Search" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon sx={{ color: "white" }}>
								<LibraryAddIcon />
							</ListItemIcon>
							<ListItemText primary="Library" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon sx={{ color: "white" }}>
								<PlaylistAddIcon />
							</ListItemIcon>
							<ListItemText primary="Create Playlist" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a">
							<ListItemIcon sx={{ color: "white" }}>
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
