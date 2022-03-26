
import { CircularProgress, Box } from "@mui/material";

export const DefaultSpinner = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress size={20} color="success" />
		</Box>
	);
};
