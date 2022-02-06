import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		minHeight: "110px",
	},
	search: {
		display: "flex",
		borderRadius: "8px",
		padding: 0,
		border: `2px solid ${theme.palette.secondary.main}`,
		maxwidth: "100%",
		width: "460px",
		
	},
	searchWrap: {
		display: 'flex',
		alignItems: 'center',
		width: "100%",
	},
	searchInputBase: {
		padding: " 0 10px 0 25px",
		fontSize: "14px",
		lineHeight: "17px",
		fontWeight: 'light',
		color: "#B0B0B0",
	},
	divider: {
		minHeight: "100%",
		width: '1.5px',
		backgroundColor: theme.palette.secondary.main,
	},
	navLinks: {
		color: theme.palette.secondary.main,
		marginRight: '10px',
		'&:last-child': {
			marginRight: 0
		}
	},
});

export const useStyles = makeStyles(styles);

