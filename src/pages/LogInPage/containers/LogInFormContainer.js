import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { LogInFormView } from "../components/LogInFormView";
import { SIGN_IN_REQUEST } from "../actions/index";
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
		onSubmit: (values) => {
			dispatch(SIGN_IN_REQUEST(values));
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
