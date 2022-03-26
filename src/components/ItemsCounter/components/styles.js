import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	container: {
		height: "25px",
	},
	input: {
		maxWidth: "60px",
		width: "100%",
		height: "100%",
		textAlign: "center",
		border: "none",
		borderTop: "1px solid #ebebeb",
		borderBottom: "1px solid #ebebeb",
		backgroundColor: "transparent",
		outline: "none",
	},
	button: {
		height: "100%",
	},
});

export const useStyles = makeStyles(styles);
