import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonsPageLayout } from "../components/PokemonsPageLayout";
import { pokemonDetailsSelector } from "../selectors/index";
import { POKEMON_DETAILS_REQUEST } from "../actions/index";
import { CartSnackbar } from "../../../components/CartSnackbar/index";
import { useCart, useSnackbar } from "../../../hooks/index";

export const PokemonsDetailsContainer = () => {
	const dispatch = useDispatch();

	const { productId } = useParams();
	const { cart, handleAddToCart } = useCart();
	const { snackbarOpen, handleSnackbarOpen, handleSnackbarClose } =
		useSnackbar();

	const { pokemonData, isLoading, errors } = useSelector(
		pokemonDetailsSelector
	);

	useEffect(() => {
		dispatch(POKEMON_DETAILS_REQUEST(productId));
	}, []);

	return (
		<>
			<CartSnackbar
				snackbarOpen={snackbarOpen}
				handleSnackbarClose={handleSnackbarClose}
			/>
			<PokemonsPageLayout
				pokemonData={pokemonData}
				cart={cart}
				isLoading={isLoading}
				errors={errors}
				handleSnackbarOpen={handleSnackbarOpen}
				handleAddToCart={handleAddToCart}
			/>
		</>
	);
};
