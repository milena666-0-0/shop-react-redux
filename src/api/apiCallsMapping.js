import * as signUpActions from '../pages/SignUpPage/actions/index';
import * as signInActions from '../pages/LogInPage/actions/index';
import * as productsActions from '../pages/ProductsPage/actions/index';
import * as pokemonDetailsActions from '../pages/PokemonsDetailsPage/actions/index';
import AuthService from '../services/authService';
import ProductsService from '../services/productsService';

export const apiCallsMapping = (action) => {
    const apiCallAction = {
        [signUpActions.SIGN_UP_REQUEST]: AuthService.signUp,
        [signInActions.SIGN_IN_REQUEST]: AuthService.signIn,
        [productsActions.PRODUCTS_REQUEST]: ProductsService.getProducts,
        [pokemonDetailsActions.POKEMON_DETAILS_REQUEST]: ProductsService.getPokemonDetails
    };
    return apiCallAction[action.type];
};
