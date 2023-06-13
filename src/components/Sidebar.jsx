import React from "react";
import { Link } from "react-router-dom";
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

const Sidebar = () => {
	return (
		<Box
			flex={2}
			padding={2}
			sx={{
				backgroundColor: "black",
				color: "white",
				display: { xs: "none", md: "flex", lg: "flex" },
				position: "fixed",
				top: 0,

				height: "100vh",
				width: "220px",
				justifyContent: "center",
			}}
		>
			<Box>
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
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
					<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
						<ListItem disablePadding>
							<ListItemButton component="a" disableRipple>
								<ListItemIcon sx={{ color: "white" }}>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{ fontSize: "14px" }}
								/>
							</ListItemButton>
						</ListItem>
					</Link>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
							<ListItemIcon sx={{ color: "white" }}>
								<SearchIcon />
							</ListItemIcon>
							<ListItemText
								primary="Search"
								primaryTypographyProps={{ fontSize: "14px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
							<ListItemIcon sx={{ color: "white" }}>
								<LibraryAddIcon />
							</ListItemIcon>
							<ListItemText
								primary="Library"
								primaryTypographyProps={{ fontSize: "14px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
							<ListItemIcon sx={{ color: "white" }}>
								<PlaylistAddIcon />
							</ListItemIcon>
							<ListItemText
								primary="Create Playlist"
								primaryTypographyProps={{ fontSize: "14px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
							<ListItemIcon sx={{ color: "white" }}>
								<FavoriteBorderIcon />
							</ListItemIcon>
							<ListItemText
								primary="Liked Songs"
								primaryTypographyProps={{ fontSize: "14px" }}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
