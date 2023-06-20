import { useNavigation, Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

const Root = () => {
	return (
		<Box>
			<Box display="flex" flex="1">
				<Sidebar />
				<Player />
				<Box
					flex="1"
					sx={{
						marginLeft: { sm: "none", md: "250px", lg: "250px" },
						marginTop: "60px",
					}}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
};

export default Root;
