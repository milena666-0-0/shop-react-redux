import { memo } from "react";
import { Box } from "@mui/material";

import { useStyles } from "./styles";

export const UserDetailsView = memo(({ userData }) => {
	const classes = useStyles();

	const { email } = userData;

	return (
		<Box
			sx={{
				margin: { xs: "0 auto 20px", md: "0 auto 30px" },
				minWidth: { xs: "100%", sm: "65%", md: "45%" },
				display: { xs: "block", lg: "flex" },
				minHeight: { xs: "250px" },
			}}
			className={classes.container}
		>
			<Box>
				<span className={classes.title}>Personal data</span>
				<Box className={classes.detailsWrapper}>
					<span className={classes.details}>Emal</span>
					<span className={classes.span}>{email}</span>
				</Box>
			</Box>
		</Box>
	);
});
