import {memo} from 'react';
import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

import { ProductsCardView } from "../../../components/ProductsCard/ProductsCardView";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";

import { useStyles } from "./styles";

export const ProductsLayout = memo(({ productsList, isLoading, errors }) => {
	const classes = useStyles();

	const content = productsList.length && !(isLoading || errors);
	const spinner = isLoading && !errors && <SquareSpinner />;
	const error = errors && <ErrorIndicator /> ;

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
			{content
				? productsList.map((productsItem) => (
						<ProductsCardView key={productsItem.id} card={productsItem} />
				  ))
				: null}
			{spinner}
			{error}
		</Box>
	);
});

ProductsLayout.propTypes = {
	productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any,
};
