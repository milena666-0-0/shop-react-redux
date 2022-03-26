import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAuth, useCart } from "../../../hooks/index";
import { UserPageLayout } from "../components/UserPageLayout";
import { GET_ORDERS_REQUEST } from "../../Cart/actions/index";

export const UserPageContainer = () => {
	const dispatch = useDispatch();

	const { userData } = useAuth();
	const {
		cart: { orders, isLoading, errors },
	} = useCart();

	useEffect(() => {
		dispatch(GET_ORDERS_REQUEST());
	}, []);

	return (
		<UserPageLayout
			userData={userData}
			orders={orders}
			isLoading={isLoading}
			errors={errors}
		/>
	);
};
