import { useState, useCallback } from "react";

export const useSnackbar = () => {
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	const handleSnackbarOpen = useCallback(() => {
		setSnackbarOpen(true);
	}, []);

	const handleSnackbarClose = useCallback(() => {
		setSnackbarOpen(false);
	}, []);

	return { snackbarOpen, handleSnackbarOpen, handleSnackbarClose };
};
