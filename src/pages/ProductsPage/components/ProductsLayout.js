import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

import { ProductsCardContainer } from "../../../components/ProductsCard/containers/ProductsCardContainer";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";

import { useStyles } from "./styles";

export const ProductsLayout = ({
	productsList,
	handleAddToCart,
	errorToShow,
	contentToShow,
	spinnerToShow,
}) => {
	const classes = useStyles();

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
			{contentToShow &&
				productsList.map((productsItem) => (
					<ProductsCardContainer
						handleAddToCart={handleAddToCart}
						key={productsItem.id}
						card={productsItem}
					/>
				))}

			{spinnerToShow && <SquareSpinner />}
			{errorToShow && <ErrorIndicator />}
		</Box>
	);
};

ProductsLayout.propTypes = {
	productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
