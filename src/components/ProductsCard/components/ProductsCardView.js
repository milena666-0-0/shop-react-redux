import { memo } from "react";

import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import { useStyles } from "../styles";

export const ProductsCardView = memo(
	({ cart, pokemon, handleSnackbarOpen, handleAddToCart }) => {
		const classes = useStyles();

		const { id, name, image, price } = pokemon;

		const pokemonDataToAddToCart = { ...pokemon, quantity: 1 };

		const findpokemonInCart = cart.itemsList.find(
			(pokemon) => pokemon.id === id
		);

		return (
			<Card sx={{ flexGrow: 4, minWidth: "263px" }}>
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
							onClick={() => {
								handleSnackbarOpen();
								handleAddToCart(pokemonDataToAddToCart);
							}}
							color="secondary"
							size="small"
						>
							Add to cart
						</Button>
					)}
				</CardActions>
			</Card>
		);
	}
);
