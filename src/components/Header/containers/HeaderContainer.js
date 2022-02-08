import { useState } from "react";

import { HeaderLayout } from "../components/HeaderLayout";
import AuthService from '../../../services/authService';

export const HeaderContainer = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		AuthService.logOut();
	};

	return (
		<HeaderLayout
			anchorEl={anchorEl}
			handleLogOut={handleLogOut}
			handleOpenMenu={handleOpenMenu}
			handleCloseMenu={handleCloseMenu}
		/>
	);
};
