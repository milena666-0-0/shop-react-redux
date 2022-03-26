import { memo } from "react";
import { Button, Box } from "@mui/material";

import { useStyles } from "./styles";

export const ItemsCounterView = memo(({
	itemQuantity,
	handleItemQuantityInc,
	handleItemQuantityDec,
	handleQuantityOnChange,
}) => {
	const classes = useStyles();

	return (
		<Box
			sx={{
				display: { xs: "flex", sm: "block" },
				flexDirection: "column",
			}}
			className={classes.container}
		>
			<Button
				className={classes.button}
				onClick={handleItemQuantityDec}
				disabled={itemQuantity < 1}
				variant="outlined"
				color="success"
			>
				-
			</Button>
			<input
				className={classes.input}
				onChange={handleQuantityOnChange}
				type="number"
				value={itemQuantity}
			/>
			<Button
				onClick={handleItemQuantityInc}
				className={classes.button}
				variant="outlined"
				color="success"
			>
				+
			</Button>
		</Box>
	);
});
