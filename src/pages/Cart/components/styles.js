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
		maxWidth: "300px",
		width: "100%",
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
		letterSpacing: "0.05rem",
		width: "100%",
		height: "40px",
        margin: 'auto'
	},
});

export const useStyles = makeStyles(styles);
