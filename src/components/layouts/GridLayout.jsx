import { Grid, Card, Typography, CardMedia } from "@mui/material";
import StyledGridItem from "../styledComponents/StyledGridItem";
import StyledCardContent from "../styledComponents/StyledCardContent";
import { Link } from "react-router-dom";
const GridLayout = ({ itemId, itemCoverArt, itemName, itemProfileName }) => {
	return (
		<>
			<StyledGridItem key={itemId} item>
				{/* <Link
					style={{ textDecoration: "none" }}
					to={`album/${item.data.uri}`}
					state={`${item.data.uri.split(":")[2]}`}
					key={item.data.uri}
				> */}
				<Card
					sx={{
						width: "200px",
						height: "290px",
						backgroundColor: "#262626",
					}}
				>
					<CardMedia
						title="album"
						sx={{ height: "200px" }}
						image={itemCoverArt}
					/>
					<StyledCardContent>
						<Typography variant="h6">{itemProfileName}</Typography>
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
				{/* </Link> */}
			</StyledGridItem>
		</>
	);
};

export default GridLayout;
