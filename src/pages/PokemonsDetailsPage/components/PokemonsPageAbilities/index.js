import { memo } from "react";
import { Box } from "@mui/material";

import { useStyles } from "../styles";

export const PokemonsPageAbilitiesView = memo(({ abilities }) => {
	const classes = useStyles();

	return (
		<Box>
			{abilities?.map(({ name, effect_entries, id }) => (
				<div key={id} className={classes.textContainer}>
					<span className={classes.coloredSpan}>{name}</span>
					<div>{effect_entries && effect_entries[1].effect}</div>
				</div>
			))}
		</Box>
	);
});
