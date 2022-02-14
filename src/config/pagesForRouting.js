import { ROUTE_NAMES } from "../routes/routeNames";
import { LogInFormContainer } from "../pages/LogInPage/containers/LogInFormContainer";
import { SignUpFormContainer } from "../pages/SignUpPage/containers/SignUpFormContainer";
import { ProductsContainer } from "../pages/ProductsPage/containers/ProductsContainer";
import { PokemonsDetailsContainer } from "../pages/PokemonsDetailsPage/containers/PokemonsDetailsContainer";

export const pagesForRouting = [
	{
		Component: PokemonsDetailsContainer,
		routePath: ROUTE_NAMES.PRODUCT_DETAILS,
		isPrivate: true,
	},
	{
		Component: ProductsContainer,
		routePath: ROUTE_NAMES.PRODUCTS,
		isPrivate: true,
	},
	{
		Component: SignUpFormContainer ,
		routePath: ROUTE_NAMES.SIGN_UP,
		isPrivate: false,
	},
	{
		Component: LogInFormContainer,
		routePath: ROUTE_NAMES.LOG_IN,
		isPrivate: false,
	},
];
