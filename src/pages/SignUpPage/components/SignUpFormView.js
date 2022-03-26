import { memo } from "react";
import {
	Box,
	TextField,
	FormHelperText,
	Select,
	MenuItem,
	InputAdornment,
	IconButton,
} from "@mui/material";
import {
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "../../../components/Button/index";
import { isSubmitButtonDisabled } from "../../../utils/index";
import { DefaultSpinner } from "../../../components/Spinners/DefaultSpinner/index";

import { useStyles } from "./styles";

export const SignUpFormView = memo(
	({ formik, errors, isLoading, handleChangeInputType, inputType }) => {
		const classes = useStyles();

		const isDisabled = !isSubmitButtonDisabled(formik) || isLoading || errors;

		return (
			<form className={classes.form} onSubmit={formik.handleSubmit}>
				<div className={classes.formLabel}>Create a new account</div>
				<label className={classes.label}>
					First name<span className={classes.required}>*</span>
				</label>
				<TextField
					color="secondary"
					name="firstName"
					type="text"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					fullWidth={true}
				/>
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.touched.firstName && formik.errors.firstName}
				</FormHelperText>
				<label className={classes.label}>
					Second name<span className={classes.required}>*</span>
				</label>

				<TextField
					color="secondary"
					name="lastName"
					type="text"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					fullWidth={true}
				/>
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.touched.lastName && formik.errors.lastName}
				</FormHelperText>
				<label className={classes.label}>Address</label>
				<Box className={classes.addressInputContainer}>
					<TextField
						sx={{ width: "48%", marginBottom: "20px" }}
						color="secondary"
						name="address.country"
						type="text"
						value={formik.values.country}
						onChange={formik.handleChange}
						placeholder="Country"
					/>

					<TextField
						sx={{ width: "48%", marginBottom: "20px" }}
						color="secondary"
						name="address.city"
						type="text"
						value={formik.values.city}
						onChange={formik.handleChange}
						placeholder="City"
					/>

					<TextField
						sx={{ marginBottom: "20px" }}
						color="secondary"
						name="address.addressLine1"
						type="text"
						value={formik.values.addressLine1}
						onChange={formik.handleChange}
						placeholder="Address line"
						fullWidth={true}
					/>

					<TextField
						sx={{ marginBottom: "20px" }}
						color="secondary"
						name="address.addressLine2"
						type="text"
						placeholder="Address line"
						value={formik.values.addressLine2}
						onChange={formik.handleChange}
						fullWidth={true}
					/>
				</Box>

				<label className={classes.label}>
					Phone number<span className={classes.required}>*</span>
				</label>

				<TextField
					color="secondary"
					name="phone"
					type="tel"
					value={formik.values.phone}
					onChange={formik.handleChange}
					fullWidth={true}
				/>
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.touched.phone && formik.errors.phone}
				</FormHelperText>
				<label className={classes.label}>
					Gender<span className={classes.required}>*</span>
				</label>
				<Box>
					<Select
						sx={{ minWidth: "50%" }}
						color="secondary"
						name="gender"
						value={formik.values.gender}
						onChange={formik.handleChange}
					>
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
					</Select>
				</Box>
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.touched.gender && formik.errors.gender}
				</FormHelperText>
				<label className={classes.label}>
					Email<span className={classes.required}>*</span>
				</label>
				<TextField
					name="email"
					autoComplete="email"
					type="text"
					color="secondary"
					value={formik.values.email}
					onChange={formik.handleChange}
					fullWidth={true}
				/>
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.touched.email && formik.errors.email}
				</FormHelperText>
				<label className={classes.label}>
					Password<span className={classes.required}>*</span>
				</label>

				<TextField
					color="secondary"
					autoComplete="new-password"
					name="password"
					type={inputType}
					value={formik.values.password}
					onChange={formik.handleChange}
					fullWidth={true}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={handleChangeInputType}
									edge="end"
								>
									{inputType === "password" ? (
										<VisibilityOffIcon />
									) : (
										<VisibilityIcon />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.errors.password}
				</FormHelperText>

				<label className={classes.label}>
					Confirm password<span className={classes.required}>*</span>
				</label>

				<TextField
					color="secondary"
					name="confirmPassword"
					autoComplete="new-password"
					type="password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					fullWidth={true}
				/>

				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					{formik.errors.confirmPassword}
				</FormHelperText>
				{errors && (
					<FormHelperText
						className={classes.helper}
						error={true}
						sx={{ marginBottom: "20px" }}
					>
						Account with this email has already been existed
					</FormHelperText>
				)}
				<Button
					disabled={isDisabled}
					label={isLoading ? <DefaultSpinner /> : "Sign in"}
					classname={classes.signUpBtn}
				/>
				<Box>
					<span>
						Have you been already signed up?{" "}
						<span>
							<Link className={classes.link} to="/login">
								Log in
							</Link>
						</span>
					</span>
				</Box>
			</form>
		);
	}
);

SignUpFormView.propTypes = {
	formik: PropTypes.object.isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any,
	handleChangeInputType: PropTypes.func,
	inputType: PropTypes.string,
};
