import { memo } from "react";
import { Box } from "@mui/material";

import { UserOrderView } from "../UserOrder/UserOrderView";

import { useStyles } from "./styles";

export const UsersOrdersView = memo(({ orders }) => {
	const classes = useStyles();

	return (
		<Box
			sx={{
				margin: { xs: "0 auto 20px" },
				minWidth: { xs: "100%", md: "50%" },
			}}
			className={classes.container}
		>
			<span className={classes.title}>Previous orders</span>
			<Box className={classes.accardion}>
				<Box>
					{orders &&
						[...orders].reverse().map((order) => {
							const { itemsList, totalPrice, createdAt } = order;
							return (
								<UserOrderView
									key={createdAt}
									orderedAt={createdAt}
									totalPrice={totalPrice}
									itemsList={itemsList}
								/>
							);
						})}
				</Box>
			</Box>
		</Box>
	);
});
