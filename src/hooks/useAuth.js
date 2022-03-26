import { useSelector } from "react-redux";

import { authSelector } from "../pages/LogInPage/selectors/index";

export const useAuth = () => {
	const { isAuth, userData } = useSelector(authSelector);

	return { isAuth, userData };
};
