import { useNavigation, Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Root = () => {
	return (
		<Box>
			<Navbar />
			<Box display="flex" flex="1">
				<Sidebar />
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
