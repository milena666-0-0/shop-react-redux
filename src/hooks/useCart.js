import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartSelector } from "../pages/Cart/selectors/index";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY,
} from "../pages/Cart/actions/index";

export const useCart = () => {
	const dispatch = useDispatch();

	const cart = useSelector(cartSelector);

	const handleAddToCart = useCallback((pokemonData) => {
		dispatch(ADD_TO_CART(pokemonData));
	}, []);

	const handleQuantityChange = useCallback((id, quantity) => {
		const dataToDispatch = {
			id,
			quantity,
		};

		dispatch(UPDATE_QUANTITY(dataToDispatch));
	}, []);

	const handleDeleteFromCart = useCallback((pokemonId) => {
		dispatch(REMOVE_FROM_CART(pokemonId));
	}, []);

	return {
		cart,
		handleAddToCart,
		handleDeleteFromCart,
		handleQuantityChange,
	};
};
