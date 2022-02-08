import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PRODUCTS_REQUEST } from "../actions/index";
import { productsSelector } from "../selectors/index";
import { ProductsLayout } from "../components/ProductsLayout";
import { PaginationView } from "../../../components/Pagination/PaginationView";
import { usePagination } from "../../../hooks/usePagination";

export const ProductsContainer = () => {
	const dispatch = useDispatch();

	const { productsData, isLoading, errors } = useSelector(productsSelector);

	const [page, onPageChange] = usePagination("productsPage");

	useEffect(() => {
		dispatch(PRODUCTS_REQUEST(page));
	}, [page]);

	return (
		<>
			<ProductsLayout
				isLoading={isLoading}
				errors={errors}
				productsList={productsData}
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