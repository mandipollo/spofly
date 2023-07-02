import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Variants = () => {
	return (
		<Stack spacing={1}>
			<Skeleton variant="rectangular" width={210} height={290} />
			<Skeleton variant="text" width={210} sx={{ fontSize: "1rem" }} />
		</Stack>
	);
};

export default Variants;
