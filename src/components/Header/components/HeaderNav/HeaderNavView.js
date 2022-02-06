import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "../styles";

export const HeaderNavView = ({ pathTo, label }) => {
	const classes = useStyles();

	return (
		<Link className={classes.navLinks} to={pathTo}>
			<Typography
				component="span"
				sx={{
					display: { xs: "none", sm: "none", md: "block" },
				}}
			>
				{label}
			</Typography>
		</Link>
	);
};
