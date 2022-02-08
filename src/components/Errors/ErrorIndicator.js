import error from "../../static/imgs/error.png";

import { useStyles } from "./styles";

export const ErrorIndicator = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<img className={classes.error} src={error} alt="error" />
			<p className={classes.errorMessage}>Something goes wrong...</p>
		</div>
	);
};
