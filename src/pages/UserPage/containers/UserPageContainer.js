import { useAuth, useCart } from "../../../hooks/index";
import { UserPageLayout } from "../components/UserPageLayout";

export const UserPageContainer = () => {

	const { userData } = useAuth();
	const {
		cart: { orders, isLoading, errors },
	} = useCart();

	return (
		<UserPageLayout
			userData={userData}
			orders={orders}
			isLoading={isLoading}
			errors={errors}
		/>
	);
};
