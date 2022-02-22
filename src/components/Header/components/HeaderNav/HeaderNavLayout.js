import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { headerNavUnauthData } from "../../config/headerUnauthNav";
import { headerNavAuthData } from "../../config/headerAuthNav";
import { useAuth } from "../../../../hooks/useAuth";

import { useStyles } from "../styles";

export const HeaderNavLayout = ({ handleLogOut }) => {
	const classes = useStyles();

	const { isAuth } = useAuth();

	const navListToMap = useMemo(
		() => (isAuth ? headerNavAuthData : headerNavUnauthData),
		[isAuth]
	);

	return (
		<Box
			sx={{
				display: { xs: "none", sm: "none", md: "block" },
				alignItems: "center",
			}}
		>
			{navListToMap.map(({ label, pathTo }) => (
				<Link key={label} className={classes.navLinks} to={pathTo}>
					<Typography component="span">{label}</Typography>
				</Link>
			))}
			{isAuth && (
				<span onClick={handleLogOut} className={classes.navLinks}>
					Log out
				</span>
			)}
		</Box>
	);
};

HeaderNavLayout.propTypes = {
	handleLogOut: PropTypes.func,
};
