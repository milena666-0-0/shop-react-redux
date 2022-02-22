import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { useCart } from "../../hooks/useCart";

import { useStyles } from "./styles";

export const ProductsCardView = ({ card, handleAddToCart }) => {
	const classes = useStyles();

	const { id, name, image, price } = card;

	const { cart } = useCart();

	const pokemonDataToAddToCart = { ...card, quantity: 1 };

	const findpokemonInCart = cart.itemsList.find(
		(pokemon) => pokemon.id === id
	);

	return (
		<Card sx={{ flexGrow: 4 }}>
			<img src={image} alt="pokemon" />
			<CardContent>
				<span className={classes.name}>{name}</span>
				<Typography
					className={classes.price}
					color="secondary"
					gutterBottom
				>
					{price}$
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={`${ROUTE_NAMES.PRODUCTS}/${id}`}>
					<Button color="secondary" size="small">
						Learn More
					</Button>
				</Link>
				{findpokemonInCart ? (
					<Link to={ROUTE_NAMES.CART}>
						<Button color="secondary" size="small">
							Go to cart
						</Button>
					</Link>
				) : (
					<Button
						onClick={() => handleAddToCart(pokemonDataToAddToCart)}
						color="secondary"
						size="small"
					>
						Add to cart
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
