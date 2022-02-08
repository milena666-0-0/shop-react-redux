import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { headerNavUnauthData } from "../../config/headerUnauthNav";
import { headerNavAuthData } from "../../config/headerAuthNav";
import { authSelector } from "../../../../pages/LogInPage/selectors/index";

import { useStyles } from "../styles";

export const HeaderNavLayout = ({handleLogOut}) => {
	const classes = useStyles();

	const { isAuth } = useSelector(authSelector);

	const navListToMap = isAuth ? headerNavAuthData : headerNavUnauthData;

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
	handleLogOut: PropTypes.func
};
