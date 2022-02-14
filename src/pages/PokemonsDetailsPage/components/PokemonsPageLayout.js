import { Paper, Grid } from "@mui/material";
import PropTypes from "prop-types";

import { PokemonsPageStatsView } from "./PokemonsPageStats/index";
import { PokemonsPageAbilitiesView } from "./PokemonsPageAbilities/index";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";
import { useRequestIndicatoors } from "../../../hooks/useRequestIndicatoors";
import { pokemonDetailsSelector } from "../selectors/index";

import { useStyles } from "./styles";

export const PokemonsPageLayout = ({ pokemonData }) => {
	const classes = useStyles();

	const { name, stats, abilities, image, price } = pokemonData;

	const { content, error, spinner } = useRequestIndicatoors(
		pokemonDetailsSelector,
		pokemonData,
		SquareSpinner,
		ErrorIndicator
	);

	return (
		<>
			{content && (
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
							<img src={image} alt={name} />
						</Grid>
						<Grid className={classes.price} item xs={6} md={4}>
							{price}$
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
			{error}
			{spinner}
		</>
	);
};

PokemonsPageLayout.propTypes = {
	pokemonData: PropTypes.object.isRequired,
};
