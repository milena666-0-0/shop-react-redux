import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert as MoreIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

import { authSelector } from "../../../../pages/LogInPage/selectors/index";
import { headerMenuListData } from "../../config/headerMenuList";

export const HeaderMenuLayout = ({
	handleOpenMenu,
	anchorEl,
	handleCloseMenu,
}) => {

	const { isAuth } = useSelector(authSelector);

	const menuList = headerMenuListData.map((listItem) => {
		return isAuth && listItem.label === "Log in"
			? { ...listItem, label: "Profile" }
			: listItem;
	});

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
				{menuList.map(({ label, pathTo }) => (
					<MenuItem key={label} onClick={handleCloseMenu}>
						<Link to={pathTo}>{label}</Link>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};
