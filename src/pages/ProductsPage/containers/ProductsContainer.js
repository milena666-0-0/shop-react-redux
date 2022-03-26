import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PRODUCTS_REQUEST } from "../actions/index";
import { productsSelector } from "../selectors/index";
import { ProductsLayout } from "../components/ProductsLayout";
import { PaginationView } from "../../../components/Pagination/PaginationView";
import { useCart, usePagination } from "../../../hooks/index";

export const ProductsContainer = () => {
	const dispatch = useDispatch();

	const [page, onPageChange] = usePagination("productsPage");

	const { productsData, isLoading, errors } = useSelector(productsSelector);

	const { handleAddToCart } = useCart();

	useEffect(() => {
		dispatch(PRODUCTS_REQUEST(page));
	}, [page]);

	return (
		<>
			<ProductsLayout
				productsList={productsData}
				handleAddToCart={handleAddToCart}
				isLoading={isLoading}
				errors={errors}
			/>
			<PaginationView
				isLoading={isLoading}
				errors={errors}
				page={page}
				onPageChange={onPageChange}
			/>
		</>
	);
};
