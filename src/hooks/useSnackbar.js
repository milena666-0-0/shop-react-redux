import { useState } from "react";

export const useSnackbar = () => {
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	const handleSnackbarOpen = () => {
		setSnackbarOpen(true);
	};

	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};

	return { snackbarOpen, handleSnackbarOpen, handleSnackbarClose };
};
