import api from "../api/config";

class CartService {
	static instance = new CartService();

	getCart() {
		return api.get("/cart");
	}

	setCartItem(pokemonData) {
		return api.post(`/cart/item`, pokemonData);
	}

	removeCartItem(pokemonId) {
		return api.delete(`/cart/item/${pokemonId}`);
	}

	updateItemQuantity({ id, quantity }) {
		const dataToPatch = {
			id,
			quantity,
		};

		return api.patch(`/cart/item`, dataToPatch);
	}
}

export default CartService.instance;
