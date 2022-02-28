import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PRODUCTS_REQUEST } from "../actions/index";
import { productsSelector } from "../selectors/index";
import { ProductsLayout } from "../components/ProductsLayout";
import { PaginationView } from "../../../components/Pagination/PaginationView";
import { usePagination } from "../../../hooks/usePagination";
import { useCart } from "../../../hooks/useCart";
import { useIndicatorsToShow } from "../../../hooks/index";

export const ProductsContainer = () => {
	const dispatch = useDispatch();

	const { productsData, isLoading, errors } = useSelector(productsSelector);

	const [page, onPageChange] = usePagination("productsPage");
	const { handleAddToCart } = useCart();
	const { contentToShow, spinnerToShow, errorToShow } = useIndicatorsToShow(
		productsSelector,
		productsData
	);

	useEffect(() => {
		dispatch(PRODUCTS_REQUEST(page));
	}, [page]);

	return (
		<>
			<ProductsLayout
				productsList={productsData}
				handleAddToCart={handleAddToCart}
				contentToShow={contentToShow}
				spinnerToShow={spinnerToShow}
				errorToShow={errorToShow}
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
