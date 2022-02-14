import { useMemo } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert as MoreIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { headerUnauthMenuListData } from "../../config/headerUnauthMenuList";
import { headerAuthMenuListData } from "../../config/headerAuthMenuList";
import { useAuth } from "../../../../hooks/useAuth";

export const HeaderMenuLayout = ({
	handleOpenMenu,
	anchorEl,
	handleCloseMenu,
	handleLogOut,
}) => {
	const { isAuth } = useAuth();

	const menuListToMap = useMemo(
		() => (isAuth ? headerAuthMenuListData : headerUnauthMenuListData),
		[isAuth]
	);

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
	anchorEl: PropTypes.bool,
};
