import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert as MoreIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { authSelector } from "../../../../pages/LogInPage/selectors/index";
import { headerUnauthMenuListData } from "../../config/headerUnauthMenuList";
import { headerAuthMenuListData } from "../../config/headerAuthMenuList";

export const HeaderMenuLayout = ({
	handleOpenMenu,
	anchorEl,
	handleCloseMenu,
}) => {
	const { isAuth } = useSelector(authSelector);

	const menuListToMap = isAuth
		? headerAuthMenuListData
		: headerUnauthMenuListData;

	return (
		<Box sx={{ display: { xs: "flex", md: "none" } }}>
			<IconButton onClick={handleOpenMenu}>
				<MoreIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
			>
				{menuListToMap.map(({ label, pathTo }) => (
					<MenuItem key={label} onClick={handleCloseMenu}>
						<Link to={pathTo}>{label}</Link>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

HeaderMenuLayout.propTypes = {
	handleOpenMenu: PropTypes.func,
	handleCloseMenu: PropTypes.func,
	anchorEl: PropTypes.bool
};

