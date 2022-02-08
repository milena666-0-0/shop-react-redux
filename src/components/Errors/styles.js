import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	error: {
		width: '170px',
		height: '170px'
	},
	errorMessage: {
		fontSize: '20px',
		marginTop: '20px'
	}
});

export const useStyles = makeStyles(styles);
