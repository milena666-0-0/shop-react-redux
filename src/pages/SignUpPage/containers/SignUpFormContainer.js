import { Box, Container } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';


import { SIGN_UP_REQUEST } from "../actions/index";
import { SignUpFormView } from "../components/SignUpFormView";
import {signUpSelector} from '../selectors/index';


export const SignUpFormContainer = () => {
	YupPassword(yup);

	const dispatch = useDispatch();

	const {errors, isLoading} = useSelector(signUpSelector);

	const validationSchema = yup.object({
		firstName: yup
			.string()
			.typeError("Should be a string")
			.required("First name is required"),
		lastName: yup
			.string()
			.typeError("Should be a string")
			.required("Second name is required"),
		country: yup.string().typeError("Should be a string"),
		city: yup.string().typeError("Should be a string"),
		addressLine1: yup.string().typeError("Should be a string"),
		addressLine2: yup.string().typeError("Should be a string"),
		gender: yup
			.string()
			.typeError("Should be a string")
			.required("Gender is required"),

		phone: yup
			.string()
			.typeError("Should be a string")
			.required("Phone number is required"),

		email: yup
			.string()
			.typeError("Should be a string")
			.email("Email is invalid")
			.required("Email is required"),
		password: yup
			.string()
			.typeError("Should be a string")
			.password("Password is invalid")
			.minUppercase(1, "Password must contain at least 1 upper letter")
			.minSymbols(0)
			.min(8, "Password should be of minimum 8 characters length")
			.required("Password is required"),
	});

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
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			dispatch(SIGN_UP_REQUEST(values));
		},
	});

	return (
		<Box>
			<Container>	
				<SignUpFormView isLoading={isLoading} errors={errors} formik={formik} />
			</Container>
		</Box>
	);
};
