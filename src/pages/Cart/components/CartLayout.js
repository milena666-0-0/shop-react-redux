import {
	Box,
	TableHead,
	Table,
	TableCell,
	TableRow,
	TableBody,
	Grid,
} from "@mui/material";

import { CartItemView } from "./CartItemView/CartItemView";
import { Button } from "../../../components/Button/index";

import { useStyles } from "./styles";

export const CartLayout = ({ cart, handleDeleteFromCart }) => {
	const { itemsList, totalPrice, quantity } = cart;

	const classes = useStyles();

	return (
		<Box>
			<Grid container>
				<Grid item md={10}>
					<span className={classes.title}>Checkout</span>
					<Table
						sx={{
							maxWidth: "850px",
							width: "100%",
						}}
					>
						<TableHead>
							<TableRow>
								<TableCell>Items</TableCell>
								<TableCell>Price</TableCell>
								<TableCell padding="none" />
							</TableRow>
						</TableHead>
						<TableBody>
							{itemsList.length
								? itemsList.map((item) => (
										<CartItemView
											key={item.id}
											cartItem={item}
											handleDeleteFromCart={
												handleDeleteFromCart
											}
										/>
								  ))
								: "Cart is empty"}
						</TableBody>
					</Table>
				</Grid>

				<Grid>
					<Box className={classes.orderContainer}>
						<Box className={classes.orderInfoContainer}>
							<span>Total</span>
							<span>{totalPrice}$</span>
						</Box>
						<Box className={classes.orderInfoContainer}>
							<span>Items</span>
							<span>{quantity}</span>
						</Box>
						<Button classname={classes.button} label="Order" />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
