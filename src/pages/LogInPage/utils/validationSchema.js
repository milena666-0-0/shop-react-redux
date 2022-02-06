import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const validationSchema = yup.object({
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
