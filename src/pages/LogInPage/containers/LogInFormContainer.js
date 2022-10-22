import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { LogInFormView } from "../components/LogInFormView";
import { SIGN_IN } from "../actions/index";
import { authSelector } from "../selectors/index";
import { validationSchema } from "../utils/validationSchema";
import { ROUTE_NAMES } from "../../../routes/routeNames";

export const LogInFormContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { errors, isLoading, isAuth } = useSelector(authSelector);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			const auth = getAuth();
			await signInWithEmailAndPassword(
				auth,
				values.email,
				values.password
			)
				.then(({ user }) => {
					dispatch(
						SIGN_IN({
							email: user.email,
							password: user.password,
							accessToken: user.accessToken,
						})
					);
				})
				.catch(({ message }) => {
					console.log(message);
				});
		},
	});

	useEffect(() => {
		if (isAuth) {
			navigate(ROUTE_NAMES.PRODUCTS);
		}
	}, [isAuth]);

	return (
		<LogInFormView isLoading={isLoading} errors={errors} formik={formik} />
	);
};
