import { useState } from "react";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { SIGN_UP_REQUEST } from "../actions/index";
import { SignUpFormView } from "../components/SignUpFormView";
import { signUpSelector } from "../selectors/index";
import { validationSchema } from "../utils/validationSchema";

export const SignUpFormContainer = () => {
	const [inputType, setInputType] = useState("password");

	const dispatch = useDispatch();

	const { errors, isLoading } = useSelector(signUpSelector);

	const handleChangeInputType = () => {
		const newInputType = inputType === "password" ? "text" : "password";
		setInputType(newInputType);
	};

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
		},
	});

	return (
		<Box>
			<SignUpFormView
				handleChangeInputType={handleChangeInputType}
				inputType={inputType}
				isLoading={isLoading}
				errors={errors}
				formik={formik}
			/>
		</Box>
	);
};
