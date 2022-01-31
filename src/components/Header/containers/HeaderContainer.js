import { useState } from "react";

import { HeaderLayout } from "../components/HeaderLayout";

export const HeaderContainer = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<HeaderLayout
			anchorEl={anchorEl}
			handleMenu={handleMenu}
			handleClose={handleClose}
		/>
	);
};
