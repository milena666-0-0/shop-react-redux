import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	button: {
		backgroundColor: theme.palette.secondary.main,
		borderRadius: "2px",
		border: "none",
		fontWeight: "medium",
		fontSize: "18px",
		lineHeight: "23px",
		color: "#FFFFFF",
		transition: "all .3s",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		"&:active": {
			backgroundColor: theme.palette.secondary.dark,
		},

	},
	disabledButton: {
		opacity: "0.5",
		cursor: "not-allowed",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export const useStyles = makeStyles(styles);

