import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	cardContainer: {
		maxWidth: "600px",
		width: "100%",
		margin: "50px auto",
		padding: "30px",
	},
	textContainer: {
		marginBottom: "20px",
		fontWeight: "normal",
		fontZize: "16px",
		lineHeight: " 150%",
		letterSpacing: "0.005em",
		color: "#515151",
	},
	name: {
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: "0.005em",
		color: theme.palette.secondary.main,
	},
	price: {
		fontWeight: 500,
		fontSize: "23px",
	},
	coloredSpan: {
		color: theme.palette.secondary.main,
		fontWeight: 600,
		display: "inline-block",
		marginBottom: "10px",
	},
	stats: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	statsValue: {
		fontWeight: 600,
		marginTop: "5px",
	},
	statsContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export const useStyles = makeStyles(styles);
