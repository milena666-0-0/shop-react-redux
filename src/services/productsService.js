import axios from "axios";

import api from "../api/config";

class ProductsService {
	static instance = new ProductsService();

	async getProducts(currentPage) {
		const res = await api.get(
			`/pokemon?offset=${currentPage * 12 - 12}&limit=12`
		);

		const products = res?.data?.results;

		const data = await axios
			.all(products.map(({ url }) => axios.get(url)))
			.then((res) => res.map((item) => item.data));

		return { data };
	}

	async getPokemonDetails(id) {
		const res = await api.get(`/pokemon/${id}`);

		const pokemon = res?.data;

		const data = await axios
			.all(pokemon.abilities.map(({ ability }) => axios.get(ability.url)))
			.then((res) => res.map((item) => item.data));

		return { data: {...pokemon, abilities: data} };
	}
}

export default ProductsService.instance;
