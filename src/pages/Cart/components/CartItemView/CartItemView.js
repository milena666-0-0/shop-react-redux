import { memo } from "react";
import { Checkbox, TableCell, TableRow, IconButton, Box } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

import { ItemsCounterContainer } from "../../../../components/ItemsCounter/containers/ItemsCounterContainer";

import { useStyles } from "./styles";

export const CartItemView = memo(({ cartItem, handleDeleteFromCart }) => {
	const classes = useStyles();

	const { id, name, price, image, quantity } = cartItem;

	return (
		<TableRow
			sx={{
				"&:last-child td, &:last-child th": {
					border: 0,
				},
			}}
		>
			<TableCell padding="checkbox" component="th" scope="row">
				<Checkbox color="secondary" defaultChecked />
			</TableCell>
			<TableCell component="th" scope="row">
				<Box className={classes.flexContainer}>
					<img src={image} alt="pokemon" />
					{name}
				</Box>
			</TableCell>
			<TableCell align="center" component="th" scope="row">
				<Box className={classes.flexContainer}>
					<ItemsCounterContainer id={id} quantity={quantity} />
					<span className={classes.span}>{price * quantity}$</span>
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
