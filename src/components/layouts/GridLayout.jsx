import { Grid, Card, Typography, CardMedia } from "@mui/material";
import StyledGridItem from "../styledComponents/StyledGridItem";
import StyledCardContent from "../styledComponents/StyledCardContent";
import { Link } from "react-router-dom";
const GridLayout = () => {
	return (
		<>
			<StyledGridItem key={item.data.uri} item>
				<Link
					style={{ textDecoration: "none" }}
					to={`album/${item.data.uri}`}
					state={`${item.data.uri.split(":")[2]}`}
					key={item.data.uri}
				>
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
							image={item.data.coverArt.sources[0].url}
						/>
						<StyledCardContent>
							<Typography variant="h6">
								{item.data.artists.items[0].profile.name}
							</Typography>
							<Typography
								overflow="hidden"
								textOverflow="ellipsis"
								whiteSpace="nowrap"
								variant="body2"
								color="#A7A7A7"
							>
								{item.data.name}
							</Typography>
						</StyledCardContent>
					</Card>
				</Link>
			</StyledGridItem>
		</>
	);
};

export default StyledCardContent;
