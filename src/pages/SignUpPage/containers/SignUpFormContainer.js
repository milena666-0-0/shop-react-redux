import { useState, useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { SIGN_UP } from "../actions/index";
import { SignUpFormView } from "../components/SignUpFormView";
import { signUpSelector } from "../selectors/index";
import { validationSchema } from "../utils/validationSchema";
import { ROUTE_NAMES } from "../../../routes/routeNames";

export const SignUpFormContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputType, setInputType] = useState("password");

	const { errors, isLoading } = useSelector(signUpSelector);

	const handleChangeInputType = useCallback(() => {
		const newInputType = inputType === "password" ? "text" : "password";

		setInputType(newInputType);
	}, [inputType]);

	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			address: {
				country: "",
				city: "",
				addressLine1: "",
				addressLine2: "",
			},
			gender: "",
			password: "",
			phone: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			const { confirmPassword, ...requestData } = values;

			const auth = getAuth();
			await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			)
				.then(({ user }) => {
					dispatch(
						SIGN_UP({
							...requestData,
							id: user.id,
							accessToken: user.accessToken,
						})
					);
				})
				.catch(({ message }) => {
					console.log(message);
				});

			navigate(ROUTE_NAMES.PRODUCTS);
		},
	});

	return (
		<SignUpFormView
			handleChangeInputType={handleChangeInputType}
			inputType={inputType}
			isLoading={isLoading}
			errors={errors}
			formik={formik}
		/>
	);
};
