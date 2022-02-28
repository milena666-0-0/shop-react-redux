import { Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import { useStyles } from "./styles";

export const CartSnackbar = ({ snackbarOpen, handleSnackbarClose }) => {
	const classes = useStyles();

	return (
		<Snackbar
			open={snackbarOpen}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			onClose={handleSnackbarClose}
			autoHideDuration={3000}
		>
			<Alert severity="success" sx={{ width: "100%" }}>
				Pokemon has been added to cart!{" "}
				<Link className={classes.link} to={ROUTE_NAMES.CART}>
					Check here
				</Link>
			</Alert>
		</Snackbar>
	);
};
