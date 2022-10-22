import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	container: {
		border: "1px solid #c4c4c4",
		padding: "20px",
		borderRadius: "4px",
		maxWidth: "45%",
		maxHeight: "200px",
		width: "100%",
	},
	title: {
		display: "inline-block",
		fontSize: "17px",
		fontWeight: 500,
		marginBottom: "10px",
	},
	details: {
		fontWeight: "400",
		fontSize: "14px",
		lineHeight: "130%",
		letterSpacing: "0.008em",
		marginRight: "16px",
		color: "rgba(117, 117, 117, 0.71)",
	},
	detailsWrapper: {
		marginBottom: "5px",
	},
	span: {
		fontWeight: "400",
		fontSize: "15px",
		lineHeight: "120%",
		letterSpacing: "0.005em",
		color: "##11142D",
	},
	input: {
		display: "none",
	},
	addressInfo: {
		fontWeight: 500,
		fontSize: "14px",
		letterSpacing: "0.008em",
		color: "rgba(117, 117, 117, 0.71)",
	},
});

export const useStyles = makeStyles(styles);
