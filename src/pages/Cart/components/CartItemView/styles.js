import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	flexContainer: {
		display: "flex",
		alignItems: "center",
	},
	span: {
		display: "inline-flex",
		marginLeft: "15px",
		minWidth: '55px'
	},
	
});

export const useStyles = makeStyles(styles);
