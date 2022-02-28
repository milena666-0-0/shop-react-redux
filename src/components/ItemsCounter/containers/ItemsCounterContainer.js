import { useState, useEffect } from "react";

import { ItemsCounterView } from "../components/ItemsCounterView";
import { useCart } from "../../../hooks/useCart";

export const ItemsCounterContainer = ({ quantity, id }) => {
	const [itemQuantity, setItemQuantity] = useState(quantity);

	const { handleQuantityChange, handleDeleteFromCart } = useCart();

	const handleQuantityOnChange = (e) => {
		setItemQuantity(e.target.value);
	};

	const handleItemQuantityInc = () => {
		setItemQuantity((itemQuantity) => itemQuantity + 1);
	};

	const handleItemQuantityDec = () => {
		setItemQuantity((itemQuantity) => itemQuantity - 1);
	};

	useEffect(() => {
		if (itemQuantity < 1) {
			handleDeleteFromCart(id);
		} else {
			handleQuantityChange(id, itemQuantity);
		}
	}, [itemQuantity]);

	return (
		<ItemsCounterView
			itemQuantity={itemQuantity}
			handleQuantityOnChange={handleQuantityOnChange}
			handleItemQuantityInc={handleItemQuantityInc}
			handleItemQuantityDec={handleItemQuantityDec}
		/>
	);
};
