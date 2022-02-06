import { Container } from "@mui/material";

import { HeaderContainer } from "../Header/containers/HeaderContainer";

export const MainLayout = ({ children }) => {
	return (
		<>
			<HeaderContainer />
			<Container>{children}</Container>
		</>
	);
};
