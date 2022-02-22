import { useEffect } from "react";

import { CartLayout } from "../components/CartLayout";
import { useCart } from "../../../hooks/useCart";

export const CartContainer = () => {
	const { cart, getCartData, handleDeleteFromCart } = useCart();

	useEffect(() => {
		getCartData();
	}, []);

	return (
		<CartLayout cart={cart} handleDeleteFromCart={handleDeleteFromCart} />
	);
};
