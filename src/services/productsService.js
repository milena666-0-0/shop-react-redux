import api from "../api/config";

class ProductsService {
	static instance = new ProductsService();

	getProducts(currentPage) {
		return api.get(`/products?page=${currentPage}&limit=12`);
	};

	getPokemonDetails(id) {
		return api.get(`/products/${id}`);
	};
};

export default ProductsService.instance;
