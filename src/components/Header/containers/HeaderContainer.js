import { useState } from "react";

import { HeaderLayout } from "../components/HeaderLayout";

export const HeaderContainer = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	return (
		<HeaderLayout
			anchorEl={anchorEl}
			handleOpenMenu={handleOpenMenu}
			handleCloseMenu={handleCloseMenu}
		/>
	);
};
