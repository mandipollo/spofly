import React from "react";
import { useDispatch } from "react-redux";
import { setInputReducer, removeInput } from "../state/inputSlice";
import {
	AppBar,
	Button,
	Box,
	Typography,
	TextField,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	top: 0,
	width: "100%",
	minHeight: 64,

	[theme.breakpoints.up("md")]: {
		left: "250px",
		width: `calc(100% - 250px)`,
	},
	[theme.breakpoints.down("md")]: {
		left: 0,
		width: "100%",
	},
	display: "flex",
	flexDirection: "row",
	overflow: "hidden",
}));
const Navbar = () => {
	const theme = useTheme();
	const location = useLocation();
	const pathname = location.pathname;

	const dispatch = useDispatch();
	const state = useSelector(state => state.input);

	const handleInputChange = e => {
		e.preventDefault();
		const inputValue = e.target.value;
		dispatch(setInputReducer(inputValue));
		console.log(state);
	};

	const handleInputClear = e => {
		dispatch(removeInput);
	};

	return (
		<>
			<CustomAppBar
				sx={{
					backgroundColor: theme.palette.base.base1,
				}}
			>
				{pathname === "/search" ? (
					<Box
						sx={{
							justifyContent: "center",
							alignItems: "center",
							display: "flex",
							flex: 6,
							margin: "0 10px",
						}}
					>
						<TextField
							value={state}
							onChange={handleInputChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon sx={{ color: "#D8D8D8" }} />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										{state ? (
											<IconButton onClick={handleInputClear}>
												<CloseIcon
													sx={{
														color: "#D8D8D8",
														"&:hover": {
															cursor: "pointer",
														},
													}}
												/>
											</IconButton>
										) : null}
									</InputAdornment>
								),
							}}
							size="small"
							variant="outlined"
							placeholder="artist, album, tracks ?"
							sx={{
								width: "70%",
								"& .MuiOutlinedInput-root": {
									// Customizing the input element
									color: "#757575",
									borderRadius: "1rem",
									outline: "none",
									backgroundColor: "#242424",
									border: "1px solid #242424 ",
									"&:hover": {
										backgroundColor: "#242424",
										outline: "0.1px solid gray",
									},
									"&.Mui-focused": {
										backgroundColor: "#242424",
										border: "1px solid white",
									},
									"& fieldset": {
										border: "none",
									},
								},
							}}
						/>
					</Box>
				) : (
					<Box
						sx={{
							justifyContent: "flex-start",
							alignItems: "center",
							display: "flex",
							flex: 6,
							margin: "0 10px",
						}}
					>
						<PauseCircleOutlineIcon
							sx={{
								display: { xs: "none", sm: "block" },
								color: "green",
								m: "0 10px",
							}}
						/>
						<Typography variant="h6" color="green" justifySelf="flex-start">
							Musbrary
						</Typography>
					</Box>
				)}

				<Box
					sx={{
						alignItems: "center",
						justifyContent: "flex-end",
						display: "flex",
						flex: 6,
					}}
				>
					<Button sx={{ marginRight: 6 }} variant="text">
						Sign up
					</Button>
					<Button
						size="large"
						sx={{ borderRadius: 3, margin: "0 10px" }}
						variant="contained"
						color="success"
					>
						Log In
					</Button>
				</Box>
			</CustomAppBar>
		</>
	);
};

export default Navbar;
