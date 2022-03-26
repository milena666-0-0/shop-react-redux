import { memo } from "react";
import { Box } from "@mui/material";

import { useStyles } from "../styles";

export const PokemonsPageAbilitiesView = memo(({ abilities }) => {
	const classes = useStyles();

	return (
		<Box>
			{abilities &&
				abilities.map((ability) => (
					<div key={ability.title} className={classes.textContainer}>
						<span className={classes.coloredSpan}>
							{ability.title}
						</span>
						<div>{ability.description}</div>
					</div>
				))}
		</Box>
	);
});
