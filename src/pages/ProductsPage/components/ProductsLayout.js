import { memo } from "react";
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

import { ProductsCardView } from "../../../components/ProductsCard/ProductsCardView";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";
import { useRequestIndicatoors } from "../../../hooks/useRequestIndicatoors";
import { productsSelector } from "../selectors/index";

import { useStyles } from "./styles";

export const ProductsLayout = memo(({ productsList, handleAddToCart }) => {
	const classes = useStyles();

	const { content, spinner, error } = useRequestIndicatoors(
		productsSelector,
		productsList,
		SquareSpinner,
		ErrorIndicator
	);

	return (
		<Box
			className={classes.box}
			sx={{
				minHeight: {
					md: "1200px",
					lg: "860px",
				},
			}}
		>
			{content &&
				productsList.map((productsItem) => (
					<ProductsCardView
						handleAddToCart={handleAddToCart}
						key={productsItem.id}
						card={productsItem}
					/>
				))}
			{spinner}
			{error}
		</Box>
	);
});

ProductsLayout.propTypes = {
	productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
