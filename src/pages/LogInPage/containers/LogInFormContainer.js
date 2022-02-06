import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useFormik } from "formik";

import { LogInFormView } from "../components/LogInFormView";
import { SIGN_IN_REQUEST } from "../actions/index";
import { authSelector } from "../selectors/index";
import { validationSchema } from "../utils/validationSchema";

export const LogInFormContainer = () => {
	const dispatch = useDispatch();

	const { errors, isLoading } = useSelector(authSelector);

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
			<LogInFormView isLoading={isLoading} errors={errors} formik={formik} />
		</Box>
	);
};
