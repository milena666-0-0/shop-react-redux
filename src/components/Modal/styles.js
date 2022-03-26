import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	modalContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		maxWidth: "400px",
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: "4px",
		padding: "20px",
		border: "1px solid #11142D",
		boxShadow: 24,
	},
});

export const useStyles = makeStyles(styles);
