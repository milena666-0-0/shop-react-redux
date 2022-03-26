import {
	Box,
	TableHead,
	Table,
	TableCell,
	TableRow,
	TableBody,
	Grid,
	Typography,
	Button,
} from "@mui/material";

import { CartItemView } from "./CartItemView/CartItemView";
import { Modal } from "../../../components/Modal/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";
import { DefaultSpinner } from "../../../components/Spinners/DefaultSpinner/index";

import { useStyles } from "./styles";

export const CartLayout = ({
	cart,
	openModal,
	isLoading,
	errors,
	handleModalOpen,
	handleModalClose,
	handleDeleteFromCart,
	handleMakeOrder,
}) => {
	const classes = useStyles();

	const { itemsList, totalPrice, quantity, customerId } = cart;

	const orderData = {
		customerId,
		totalPrice,
		itemsList,
	};

	const buttonDisabledClass =
		!itemsList.length || isLoading || errors
			? classes.buttonDisabled
			: classes.button;

	return (
		<Box>
			<Grid container>
				<Grid item xs={12} xl={10}>
					<span className={classes.title}>Checkout</span>
					<Table
						sx={{
							maxWidth: { xs: "100%", xl: "95%" },
						}}
					>
						<TableHead>
							<TableRow>
								<TableCell>
									<span>Items</span>
								</TableCell>
								<TableCell>
									<span>Price</span>
								</TableCell>
								<TableCell padding="none" />
							</TableRow>
						</TableHead>
						<TableBody>
							{itemsList.length ? (
								itemsList.map((item) => (
									<CartItemView
										key={item.id}
										cartItem={item}
										handleDeleteFromCart={
											handleDeleteFromCart
										}
									/>
								))
							) : (
								<tr>
									<td className={classes.emptyMessage}>
										Cart is empty
									</td>
								</tr>
							)}
						</TableBody>
					</Table>
					{errors && <ErrorIndicator />}
				</Grid>

				<Grid>
					<Box
						sx={{
							position: { xs: "relative", xl: "fixed" },
							top: { xs: "30px", xl: "175px" },
						}}
						className={classes.orderContainer}
					>
						<Box className={classes.orderInfoContainer}>
							<span>Total</span>
							<span>{totalPrice}$</span>
						</Box>
						<Box className={classes.orderInfoContainer}>
							<span>Items</span>
							<span>{quantity}</span>
						</Box>
						<button
							className={`${buttonDisabledClass}`}
							onClick={() => {
								handleMakeOrder(orderData);
								handleModalOpen();
							}}
							disabled={errors || isLoading || !itemsList.length}
						>
							{isLoading ? <DefaultSpinner /> : "Order"}
						</button>
					</Box>
				</Grid>
				<Modal
					openModal={openModal}
					handleModalClose={handleModalClose}
					renderContent={() => (
						<>
							<Typography
								sx={{ marginBottom: "15px" }}
								align="center"
							>
								Congrats! You've just finished your order.
								Thanks for choosing our service!!!
							</Typography>

							<div className={classes.buttonContainer}>
								<Button
									onClick={handleModalClose}
									color="secondary"
									variant="contained"
									size="medium"
									sx={{ color: "#fff" }}
								>
									OK
								</Button>
							</div>
						</>
					)}
				/>
			</Grid>
		</Box>
	);
};
