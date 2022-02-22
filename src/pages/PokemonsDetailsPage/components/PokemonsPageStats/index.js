import { Box } from "@mui/material";

import { statsImages } from "../../config/statsImages";

import { useStyles } from "../styles";

export const PokemonsPageStatsView = ({ stats }) => {
	const classes = useStyles();

	return (
		<Box className={classes.statsContainer}>
			{stats.map((stat) => (
				<Box className={classes.stats} key={stat.title}>
					<img src={statsImages[stat.title]} alt={stat.title} />
					<div className={classes.statsValue}>{stat.value}</div>
				</Box>
			))}
		</Box>
	);
};
