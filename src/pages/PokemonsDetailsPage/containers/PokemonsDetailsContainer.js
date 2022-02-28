import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonsPageLayout } from "../components/PokemonsPageLayout";
import { pokemonDetailsSelector } from "../selectors/index";
import { POKEMON_DETAILS_REQUEST } from "../actions/index";
import { CartSnackbar } from "../../../components/CartSnackbar/index";
import { useIndicatorsToShow } from "../../../hooks/index";
import { useSnackbar } from "../../../hooks/index";
import { useCart } from "../../../hooks/index";

export const PokemonsDetailsContainer = () => {
	const dispatch = useDispatch();
	const { productId } = useParams();
	const { cart, handleAddToCart } = useCart();
	const { snackbarOpen, handleSnackbarOpen, handleSnackbarClose } =
		useSnackbar();

	const { pokemonData } = useSelector(pokemonDetailsSelector);

	const { contentToShow, spinnerToShow, errorToShow } = useIndicatorsToShow(
		pokemonDetailsSelector,
		pokemonData
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
				contentToShow={contentToShow}
				spinnerToShow={spinnerToShow}
				errorToShow={errorToShow}
				handleSnackbarOpen={handleSnackbarOpen}
				handleAddToCart={handleAddToCart}
			/>
		</>
	);
};
