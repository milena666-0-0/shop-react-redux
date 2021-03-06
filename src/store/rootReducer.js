import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBlacklistFilter } from "redux-persist-transform-filter";

import { signUpReducer } from "../pages/SignUpPage/reducers/index";
import { signInReducer } from "../pages/LogInPage/reducers/index";
import { productsReducer } from "../pages/ProductsPage/reducers/index";
import { pokemonDetailsReducer } from "../pages/PokemonsDetailsPage/reducers/index";
import { cartReducer } from "../pages/Cart/reducers/index";

const authBlackListedFields = createBlacklistFilter("signIn", [
	"isLoading",
	"errors",
]);

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["signIn", "products"],
	transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
	signUp: signUpReducer,
	signIn: signInReducer,
	products: productsReducer,
	pokemonDetails: pokemonDetailsReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
