import { CircularProgress, Box } from "@mui/material";

export const Spinner = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress size={20} color="success" />
		</Box>
	);
};
