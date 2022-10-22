import { memo } from "react";
import { TableCell, TableRow, IconButton, Box } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

import { ItemsCounterContainer } from "../../../../components/ItemsCounter/containers/ItemsCounterContainer";

import { useStyles } from "./styles";

export const CartItemView = memo(({ cartItem, handleDeleteFromCart }) => {
	const classes = useStyles();

	const { id, name, weight, sprites, quantity } = cartItem;

	return (
		<TableRow
			sx={{
				"&:last-child td, &:last-child th": {
					border: 0,
				},
			}}
		>
			<TableCell component="th" scope="row">
				<Box
					sx={{ flexDirection: { xs: "column", sm: "row" } }}
					className={classes.flexContainer}
				>
					<img src={sprites.front_default} alt="pokemon" />
					{name}
				</Box>
			</TableCell>
			<TableCell align="center" component="th" scope="row">
				<Box className={classes.flexContainer}>
					<ItemsCounterContainer id={id} quantity={quantity} />
					<span className={classes.span}>{weight * quantity}$</span>
				</Box>
			</TableCell>
			<TableCell padding="none" component="th" scope="row">
				<IconButton onClick={() => handleDeleteFromCart(id)}>
					<DeleteIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
});
