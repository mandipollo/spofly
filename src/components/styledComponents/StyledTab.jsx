import styled from "@emotion/styled";
import { Tab } from "@mui/material";

const StyledTab = styled(Tab)({
	color: "black",
	borderRadius: "1rem",
	backgroundColor: "white",
	margin: "0 10px",
	fontSize: "12px",
	minHeight: "38px",

	"&.Mui-selected": {
		color: "white",
		backgroundColor: "black",
	},
});

export default StyledTab;
