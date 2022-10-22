import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartSelector } from "../selectors/index";
import { CartLayout } from "../components/CartLayout";
import { useCart, useModal } from "../../../hooks/index";
import { MAKE_ORDER } from "../actions/index";

export const CartContainer = () => {
	const dispatch = useDispatch();

	const { isLoading, errors } = useSelector(cartSelector);

	const { cart, handleDeleteFromCart } = useCart();
	const { openModal, handleModalClose, handleModalOpen } = useModal();

	const handleMakeOrder = useCallback(
		(orderData) => {
			dispatch(MAKE_ORDER(orderData));
		},
		[dispatch]
	);

	return (
		<CartLayout
			cart={cart}
			openModal={openModal}
			isLoading={isLoading}
			errors={errors}
			handleModalClose={handleModalClose}
			handleModalOpen={handleModalOpen}
			handleDeleteFromCart={handleDeleteFromCart}
			handleMakeOrder={handleMakeOrder}
		/>
	);
};
