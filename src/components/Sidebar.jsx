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
					<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
						<ListItem disablePadding>
							<ListItemButton component="a" disableRipple>
								<ListItemIcon sx={{ color: "white" }}>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText
									sx={{
										color: "#A7A7A7",
										"&:hover": {
											color: "white",
										},
									}}
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
								sx={{
									color: "#A7A7A7",
									"&:hover": {
										color: "white",
									},
								}}
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
								sx={{
									color: "#A7A7A7",
									"&:hover": {
										color: "white",
									},
								}}
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
								sx={{
									color: "#A7A7A7",
									"&:hover": {
										color: "white",
									},
								}}
								primary="Create Playlist"
								primaryTypographyProps={{ fontSize: "14px" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" disableRipple>
							<ListItemIcon
								sx={{
									color: "#A7A7A7",
									"&:hover": {
										color: "white",
									},
								}}
							>
								<FavoriteBorderIcon />
							</ListItemIcon>
							<ListItemText
								sx={{
									color: "#A7A7A7",
									"&:hover": {
										color: "white",
									},
								}}
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
