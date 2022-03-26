import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	container: {
		border: "1px solid #c4c4c4",
		padding: "20px",
		borderRadius: "4px",
		maxWidth: "53%",
		maxHeight: "700px",
		width: "100%",
	},
	title: {
		display: "inline-block",
		fontWeight: 500,
		fontSize: "17px",
		marginBottom: "10px",
	},
	accardion: {
		maxHeight: "500px",
		overflow: "auto",
	},
});

export const useStyles = makeStyles(styles);
