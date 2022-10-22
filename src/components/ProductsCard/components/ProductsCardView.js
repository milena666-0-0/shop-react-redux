import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

		const { name, id, sprites, weight } = pokemon;

		const pokemonDataToAddToCart = { ...pokemon, quantity: 1 };

		const findpokemonInCart = cart.itemsList.find(
			(pokemon) => pokemon.id === id
		);

		return (
			<Card sx={{ flexGrow: 4, minWidth: "263px" }}>
				<img src={sprites?.front_default} alt="pokemon" />
				<CardContent>
					<span className={classes.name}>{name}</span>
					<Typography
						className={classes.price}
						color="secondary"
						gutterBottom
					>
						{weight}$
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
