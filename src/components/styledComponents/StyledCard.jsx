import styled from "@emotion/styled";
import { Card } from "@mui/material";

const StyledCard = styled(Card)(() => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	color: "white",
	elevation: 0,
}));
export default StyledCard;
