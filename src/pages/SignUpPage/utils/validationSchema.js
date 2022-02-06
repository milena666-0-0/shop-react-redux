import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const validationSchema = yup.object({
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
		.minLowercase(0)
		.minSymbols(0)
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords doesn't match")
		.required("Confirm Password is required"),
});
