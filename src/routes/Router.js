import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import { LogInFormContainer } from "../pages/LogInPage/containers/LogInFormContainer";
import { SignUpFormContainer } from "../pages/SignUpPage/containers/SignUpFormContainer";
import { ProductsContainer } from "../pages/HomePage/containers/ProductsContainer";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
	return (
		<Routes>
			<Route path={ROUTE_NAMES.LOG_IN} element={<LogInFormContainer />} />
			<Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpFormContainer />} />
			<Route
				path={ROUTE_NAMES.PRODUCTS}
				element={
					<PrivateRoute>
						<ProductsContainer />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};
