import { useState } from "react";

import { HeaderLayout } from "../components/HeaderLayout";
import AuthService from "../../../services/authService";
import { useCart } from "../../../hooks/useCart";


export const HeaderContainer = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const { cart } = useCart();

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
			cart={cart}
			handleLogOut={handleLogOut}
			handleOpenMenu={handleOpenMenu}
			handleCloseMenu={handleCloseMenu}
		/>
	);
};
