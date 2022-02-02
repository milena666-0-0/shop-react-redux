import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";

import { LogInFormView } from "../components/LogInFormView";
import { SIGN_IN_REQUEST } from "../actions/index";
import { authSelector } from "../selectors/index";

export const LogInFormContainer = () => {
	YupPassword(yup);

	const dispatch = useDispatch();

	const { errors, isLoading } = useSelector(authSelector);

	const validationSchema = yup.object({
		email: yup
			.string()
			.typeError("Should be a string")
			.email("Email is invalid")
			.required("Enter the email"),
		password: yup
			.string()
			.typeError("Should be a string")
			.required("Enter the password"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			dispatch(SIGN_IN_REQUEST(values));
		},
	});

	return (
		<Box>
			<Container>
				<LogInFormView
					isLoading={isLoading}
					errors={errors}
					formik={formik}
				/>
			</Container>
		</Box>
	);
};
