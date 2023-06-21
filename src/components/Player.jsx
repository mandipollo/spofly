import H5AudioPlayer from "react-h5-audio-player";
import { Box } from "@mui/material";
import "react-h5-audio-player/lib/styles.css";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";

const Player = () => {
	const trackState = useSelector(state => state.playTrack);

	console.log(trackState);
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100vw",
				height: "100px",
				zIndex: 999,
			}}
		>
			<H5AudioPlayer
				autoPlay
				src={trackState}
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: theme.palette.base.base1,
				}}
			/>
		</Box>
	);
};

export default Player;
