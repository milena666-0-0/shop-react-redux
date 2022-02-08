import { makeStyles } from "@mui/styles";

const styles = (theme) => ({
	name: {
		display: 'inline-block',
		fontWeight: "normal",
		fontSize: "20px",
		lineHeight: "120%",
		letterSpacing: "0.005em",
        color: '#11142D',
		marginBottom: '15px'
	},
	price: {
		fontWeight: "bold",
		fontSize: "18px",
		lineHeight: "120%",
		letterSpacing: "0.005em",
	},
    box: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
	
});

export const useStyles = makeStyles(styles);
