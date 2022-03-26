import { useState, useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGN_UP_REQUEST } from "../actions/index";
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
		onSubmit: (values) => {
			const { confirmPassword, ...requestData } = values;
			dispatch(SIGN_UP_REQUEST(requestData));
			if(!errors) navigate(ROUTE_NAMES.LOG_IN);
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
