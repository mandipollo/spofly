import { TableRow, TableCell, Avatar } from "@mui/material";

import React from "react";
import styled from "@emotion/styled";
import formatDuration from "../utilities/FormatTime";

const StyledTableCell = styled(TableCell)({
	color: "#A7A7A7",
	border: "none",
	"&:hover": {
		cursor: "pointer",
	},
});
const ModuleTable = ({
	trackNumber,
	onClick,
	trackUrl,
	trackDurationMs,
	trackName,
	trackId,
	albumArt,
	index,
}) => {
	return (
		<TableRow
			key={trackId - index}
			sx={{
				border: 0,
				color: "#A7A7A7",
				"&:hover": {
					backgroundColor: "#4B5763",
				},
			}}
		>
			<StyledTableCell>{trackNumber}</StyledTableCell>
			{albumArt && (
				<StyledTableCell>
					<Avatar variant="square" src={albumArt} />
				</StyledTableCell>
			)}
			<StyledTableCell
				onClick={() => onClick(trackUrl ? trackUrl : null)}
				align="left"
			>
				{trackName}
			</StyledTableCell>
			<StyledTableCell align="left">
				{formatDuration(`${trackDurationMs}`)}
			</StyledTableCell>
		</TableRow>
	);
};

export default ModuleTable;
