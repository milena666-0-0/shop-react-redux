import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	paginationContainer: {
		display: "flex",
		justifyContent: "flex-end",
		margin: "20px 0 40px",
	},
	pagination: {
		"& .MuiPaginationItem-root.Mui-selected": {
			color: "#fff",
		},
	},
});

export const useStyles = makeStyles(styles);
