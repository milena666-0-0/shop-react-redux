import * as productsActions from "../pages/ProductsPage/actions/index";
import * as pokemonDetailsActions from "../pages/PokemonsDetailsPage/actions/index";
import ProductsService from "../services/productsService";

export const apiCallsMapping = (action) => {
	const apiCallAction = {
		[productsActions.PRODUCTS_REQUEST]: ProductsService.getProducts,
		[pokemonDetailsActions.POKEMON_DETAILS_REQUEST]:
			ProductsService.getPokemonDetails,
	};
	return apiCallAction[action.type];
};
