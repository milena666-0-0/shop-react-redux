import * as signUpActions from "../pages/SignUpPage/actions/index";
import * as signInActions from "../pages/LogInPage/actions/index";
import * as productsActions from "../pages/ProductsPage/actions/index";
import * as pokemonDetailsActions from "../pages/PokemonsDetailsPage/actions/index";
import * as cartActions from "../pages/Cart/actions/index";
import AuthService from "../services/authService";
import ProductsService from "../services/productsService";
import CartService from "../services/cartService";

export const apiCallsMapping = (action) => {
	const apiCallAction = {
		[signUpActions.SIGN_UP_REQUEST]: AuthService.signUp,
		[signInActions.SIGN_IN_REQUEST]: AuthService.signIn,

		[productsActions.PRODUCTS_REQUEST]: ProductsService.getProducts,
		[pokemonDetailsActions.POKEMON_DETAILS_REQUEST]:
			ProductsService.getPokemonDetails,

		[cartActions.CART_REQUEST]: CartService.getCart,
		[cartActions.ADD_TO_CART_REQUEST]: CartService.setCartItem,
		[cartActions.REMOVE_FROM_CART_REQUEST]: CartService.removeCartItem,
		[cartActions.UPDATE_QUANTITY_REQUEST]: CartService.updateItemQuantity,
	};
	return apiCallAction[action.type];
};
