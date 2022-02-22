import { Routes, Route } from "react-router-dom";

import { pagesForRouting } from "../config/pagesForRouting";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
	return (
		<Routes>
			{pagesForRouting.map(({ routePath, Component, isPrivate }) => {
				if (isPrivate) {
					return (
						<Route
							key={routePath}
							path={routePath}
							element={
								<PrivateRoute>
									<Component />
								</PrivateRoute>
							}
						/>
					);
				}
				return (
					<Route
						key={routePath}
						path={routePath}
						element={<Component />}
					/>
				);
			})}
		</Routes>
	);
};
