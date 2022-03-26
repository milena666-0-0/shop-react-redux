import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartSelector } from "../pages/Cart/selectors/index";
import {
	CART_REQUEST,
	ADD_TO_CART_REQUEST,
	REMOVE_FROM_CART_REQUEST,
	UPDATE_QUANTITY_REQUEST,
} from "../pages/Cart/actions/index";

export const useCart = () => {
	const dispatch = useDispatch();

	const cart = useSelector(cartSelector);

	const getCartData = useCallback(() => {
		dispatch(CART_REQUEST());
	}, []);

	const handleAddToCart = useCallback((pokemonData) => {
		dispatch(ADD_TO_CART_REQUEST(pokemonData));
	}, []);

	const handleQuantityChange = useCallback((id, quantity) => {
		const dataToDispatch = {
			id,
			quantity,
		};

		dispatch(UPDATE_QUANTITY_REQUEST(dataToDispatch));
	}, []);

	const handleDeleteFromCart = useCallback((pokemonId) => {
		dispatch(REMOVE_FROM_CART_REQUEST(pokemonId));
	}, []);

	return {
		cart,
		getCartData,
		handleAddToCart,
		handleDeleteFromCart,
		handleQuantityChange,
	};
};
