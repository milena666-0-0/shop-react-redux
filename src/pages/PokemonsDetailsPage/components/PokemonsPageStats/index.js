import { memo } from "react";
import { Box } from "@mui/material";

import { statsImages } from "../../config/statsImages";

import { useStyles } from "../styles";

export const PokemonsPageStatsView = memo(({ stats }) => {
	const classes = useStyles();

	return (
		<Box className={classes.statsContainer}>
			{stats &&
				stats.map((stat) => (
					<Box className={classes.stats} key={stat.stat.name}>
						<img
							src={statsImages[stat.stat.name]}
							alt={stat.stat.name}
						/>
						<div className={classes.statsValue}>
							{stat.base_stat}
						</div>
					</Box>
				))}
		</Box>
	);
});
