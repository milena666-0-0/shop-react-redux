import { useSelector } from "react-redux";

import { authSelector } from "../pages/LogInPage/selectors/index";
import { signUpSelector } from "../pages/SignUpPage/selectors/index";

export const useAuth = () => {
	const { isAuth } = useSelector(authSelector);
	const { userData } = useSelector(signUpSelector);

	return { isAuth, userData };
};
