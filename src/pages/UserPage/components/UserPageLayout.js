import { Box } from "@mui/material";

import { UserDetailsView } from "./UserDetails/index";
import { UsersOrdersView } from "./UsersOrders/index";
import { SquareSpinner } from "../../../components/Spinners/SquareSpinner/index";
import { ErrorIndicator } from "../../../components/Errors/ErrorIndicator";

export const UserPageLayout = ({ userData, orders, isLoading, errors }) => {
	return (
		<Box
			sx={{
				display: { md: "block", lg: "flex" },
				justifyContent: "space-between",
			}}
		>
			{isLoading ? (
				<SquareSpinner />
			) : (
				<>
					<UserDetailsView userData={userData} />
					<UsersOrdersView userData={userData} orders={orders} />
				</>
			)}
			{errors && <ErrorIndicator />}
		</Box>
	);
};
