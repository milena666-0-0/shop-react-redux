import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	title: {
		fontWeight: 500,
		marginBottom: "30px",
		display: "inline-block",
	},
	orderContainer: {
		boxShadow: "0px 0px 10px 3px rgba(20, 66, 38, 0.2)",
		borderRadius: "4px",
		padding: "30px",
		position: "fixed",
		top: "175px",
		minWidth: "250px",
	},
	orderInfoContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "20px",
		"& span": {
			fontWeight: 500,
		},
	},
	button: {
		backgroundColor: theme.palette.secondary.main,
		outline: "none",
		border: "none",
		letterSpacing: "0.05rem",
		width: "100%",
		height: "40px",
		margin: "auto",
		fontWeight: "medium",
		fontSize: "18px",
		lineHeight: "23px",
		color: "#FFFFFF",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
			cursor: "pointer",
		},
		"&:active": {
			backgroundColor: theme.palette.secondary.dark,
		},
	},
	buttonDisabled: {
		backgroundColor: theme.palette.secondary.main,
		outline: "none",
		border: "none",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		letterSpacing: "0.05rem",
		width: "100%",
		height: "40px",
		margin: "auto",
		fontWeight: "medium",
		fontSize: "18px",
		lineHeight: "23px",
		color: "#FFFFFF",
		opacity: "0.5",
		cursor: "not-allowed",
	},
	emptyMessage: {
		display: "inline-block",
		marginTop: "10px",
		fontWeight: 500,
	},
	buttonContainer: {
		display: "flex",
		justifyContent: "center",
	},
});

export const useStyles = makeStyles(styles);
