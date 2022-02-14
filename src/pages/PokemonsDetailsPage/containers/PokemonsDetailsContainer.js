import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokemonsPageLayout } from "../components/PokemonsPageLayout";
import { pokemonDetailsSelector } from "../selectors/index";
import { POKEMON_DETAILS_REQUEST } from "../actions/index";

export const PokemonsDetailsContainer = () => {
	const dispatch = useDispatch();
	const { productId } = useParams();

	const { pokemonData } = useSelector(pokemonDetailsSelector);

	useEffect(() => {
		dispatch(POKEMON_DETAILS_REQUEST(productId));
	}, []);

	return <PokemonsPageLayout pokemonData={pokemonData} />;
};
