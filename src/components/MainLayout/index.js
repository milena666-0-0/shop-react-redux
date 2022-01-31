import { HeaderContainer } from "../Header/containers/HeaderContainer";


export const MainLayout = ({ children }) => {
	return (
		<>
			<HeaderContainer />
			{children}
		</>
	);
};


