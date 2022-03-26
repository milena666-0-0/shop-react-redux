import { ProductsCardView } from "../components/ProductsCardView";
import { CartSnackbar } from "../../CartSnackbar/index";
import { useCart } from "../../../hooks/useCart";
import { useSnackbar } from "../../../hooks/index";

export const ProductsCardContainer = ({ card, handleAddToCart }) => {
	const { cart } = useCart();
	const { snackbarOpen, handleSnackbarOpen, handleSnackbarClose } =
		useSnackbar();

	return (
		<>
			<CartSnackbar
				snackbarOpen={snackbarOpen}
				handleSnackbarClose={handleSnackbarClose}
			/>
			<ProductsCardView
				cart={cart}
				handleSnackbarOpen={handleSnackbarOpen}
				pokemon={card}
				handleAddToCart={handleAddToCart}
			/>
		</>
	);
};
