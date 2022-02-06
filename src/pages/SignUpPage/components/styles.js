import { makeStyles } from "@mui/styles";


const styles = (theme) => ({
	form: {
		maxWidth: "500px",
		width: "100%",
		padding: "30px",
		margin: "50px auto",
		boxShadow: "0px 0px 10px 3px rgba(20, 66, 38, 0.2)",
	},
	addressInputContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	required: {
        color: 'red'
    },
    formLabel: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: "20px",
        margin: '10px 0 20px'
    },
    label: {
        fontWeight: 500,
    },
    signUpBtn: {
        width: '100px',
        height: '30px',
        fontSize: '16px',
        margin: '0 auto 20px'
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.dark,
        fontWeight: 500
    },
    helper: {
        marginBottom: '20px'
    }
});

export const useStyles = makeStyles(styles);

