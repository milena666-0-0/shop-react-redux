import { Paper, Grid, Button, Box } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { PokemonsPageStatsView } from "./PokemonsPageStats/index";
import { PokemonsPageAbilitiesView } from "./PokemonsPageAbilities/index";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import { useStyles } from "./styles";

export const PokemonsPageLayout = ({
	pokemonData,
	cart,
	isLoading,
	errors,
	handleSnackbarOpen,
	handleAddToCart,
}) => {
	const classes = useStyles();

	const { name, stats, sprites, weight, id, abilities } = pokemonData;

	const findpokemonInCart = cart.itemsList.find(
		(pokemon) => pokemon.id === id
	);

	const pokemonDataToAddToCart = {
		...pokemonData,
		quantity: 1,
	};

	return (
		<>
			{isLoading ? (
				<SquareSpinner />
			) : (
				<Paper className={classes.cardContainer} variant="outlined">
					<Grid container sx={{ alignItems: "center" }}>
						<Grid
							className={classes.name}
							align="center"
							item
							xs={12}
							md={12}
						>
							{name}
						</Grid>
						<Grid item xs={6} md={8}>
							<img src={sprites?.front_default} alt={name} />
						</Grid>
						<Grid className={classes.price} item xs={6} md={4}>
							<Box sx={{ marginBottom: "10px" }}>{weight}$</Box>
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
						</Grid>
						<Grid item md={12}>
							<PokemonsPageAbilitiesView abilities={abilities} />
						</Grid>
						<Grid item xs={12} sm={8} md={8}>
							<PokemonsPageStatsView stats={stats} />
						</Grid>
					</Grid>
				</Paper>
			)}

			{errors && <ErrorIndicator />}
		</>
	);
};

PokemonsPageLayout.propTypes = {
	pokemonData: PropTypes.object.isRequired,
};
