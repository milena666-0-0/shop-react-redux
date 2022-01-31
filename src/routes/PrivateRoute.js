import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { authSelector } from "../pages/LogInPage/selectors/index";
import { ROUTE_NAMES } from "./routeNames";

export const PrivateRoute = ({ children }) => {
	const { isAuth } = useSelector(authSelector);
	return isAuth ? children : <Navigate to={ROUTE_NAMES.LOG_IN} />;
};
