import { Card, Typography, Avatar } from "@mui/material";
import StyledGridItem from "../styledComponents/StyledGridItem";
import StyledCardContent from "../styledComponents/StyledCardContent";
import { Link } from "react-router-dom";
const GridLayoutAvatar = ({
	itemId,
	itemCoverArt,
	itemName,
	itemProfileName,
	itemRoute,
	itemState,
}) => {
	return (
		<>
			<StyledGridItem item>
				<Link
					style={{ textDecoration: "none" }}
					to={itemRoute ? itemRoute : null}
					state={itemState ? itemState : null}
					key={itemId}
				>
					<Card
						sx={{
							width: "200px",
							height: "290px",
							backgroundColor: "#262626",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Avatar
							alt="Remy Sharp"
							src={itemCoverArt ? itemCoverArt : null}
							sx={{ height: "140px", width: "140px" }}
						/>
						<StyledCardContent>
							<Typography
								overflow="hidden"
								textOverflow="ellipsis"
								whiteSpace="nowrap"
								variant="h6"
							>
								{itemProfileName}
							</Typography>
							<Typography
								overflow="hidden"
								textOverflow="ellipsis"
								whiteSpace="nowrap"
								variant="body2"
								color="#A7A7A7"
							>
								{itemName}
							</Typography>
						</StyledCardContent>
					</Card>
				</Link>
			</StyledGridItem>
		</>
	);
};

export default GridLayoutAvatar;
