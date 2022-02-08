import {makeStyles} from '@mui/styles';

const styles = (theme) => ({
	box: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		minHeight: "870px",
		height: "100%",
	},
});

export const useStyles = makeStyles(styles);
