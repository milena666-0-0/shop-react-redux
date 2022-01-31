import {
	Box,
	TextField,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormHelperText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Button } from "../../../components/Button/index";
import { isSubmitButtonDisabled } from "../../../utils/isSubmitButtonDisabled";
import { Spinner } from "../../../components/Spinner/index";


import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const SignUpFormView = ({ formik, errors, isLoading }) => {
	const classes = useStyles();
	const disabled = !isSubmitButtonDisabled(formik) || isLoading;

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
				type="phone"
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
			<RadioGroup
				row
				onChange={formik.handleChange}
				value={formik.values.gender}
				name="controlled-radio-buttons-group"
			>
				<FormControlLabel
					value="female"
					control={<Radio name="gender" color="secondary" />}
					label="Female"
				/>
				<FormControlLabel
					value="male"
					control={<Radio name="gender" color="secondary" />}
					label="Male"
				/>
			</RadioGroup>
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
				name="password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				fullWidth={true}
			/>
			<FormHelperText
				className={classes.helper}
				error={true}
				sx={{ marginBottom: "20px" }}
			>
				{formik.touched.password && formik.errors.password}
			</FormHelperText>
			{errors ? (
				<FormHelperText
					className={classes.helper}
					error={true}
					sx={{ marginBottom: "20px" }}
				>
					Account with this email has already been existed
				</FormHelperText>
			) : null}
			<Button
				disabled={disabled}
				label={isLoading ? <Spinner /> : "Sign in"}
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
};

SignUpFormView.propTypes = {
	formik: PropTypes.object.isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any
};

