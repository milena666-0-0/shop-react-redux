import { ROUTE_NAMES } from "../routes/routeNames";
import { LogInFormContainer } from "../pages/LogInPage/containers/LogInFormContainer";
import { SignUpFormContainer } from "../pages/SignUpPage/containers/SignUpFormContainer";
import { ProductsContainer } from "../pages/ProductsPage/containers/ProductsContainer";
import { PokemonsDetailsContainer } from "../pages/PokemonsDetailsPage/containers/PokemonsDetailsContainer";
import { CartContainer } from "../pages/Cart/containers/CartContainer";
import {UserPageContainer} from '../pages/UserPage/containers/UserPageContainer';

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
		Component: SignUpFormContainer,
		routePath: ROUTE_NAMES.SIGN_UP,
		isPrivate: false,
	},
	{
		Component: LogInFormContainer,
		routePath: ROUTE_NAMES.LOG_IN,
		isPrivate: false,
	},
	{
		Component: CartContainer,
		routePath: ROUTE_NAMES.CART,
		isPrivate: true,
	},
	{
		Component: UserPageContainer,
		routePath: ROUTE_NAMES.USER,
		isPrivate: true,
	},
];
