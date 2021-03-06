import { memo } from "react";
import { Box, TextField, FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "../../../components/Button/index";
import { isSubmitButtonDisabled } from "../../../utils/index";
import { DefaultSpinner } from "../../../components/Spinners/DefaultSpinner/index";

import { useStyles } from "./styles";

export const LogInFormView = memo(({ formik, errors, isLoading }) => {
	const classes = useStyles();
	const isDisabled = !isSubmitButtonDisabled(formik) || isLoading;

	return (
		<form className={classes.form} onSubmit={formik.handleSubmit}>
			<div className={classes.formLabel}>Log in</div>
			<TextField
				color="secondary"
				autoComplete='username'
				name="email"
				type="text"
				placeholder="Email"
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

			<TextField
				color="secondary"
				autoComplete='current-password'
				name="password"
				type="password"
				placeholder="password"
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
			{errors && (
				<FormHelperText className={classes.helper} error={true}>
					Incorrect password or email
				</FormHelperText>
			)}

			<Button
				disabled={isDisabled}
				label={isLoading ? <DefaultSpinner /> : "Log in"}
				classname={classes.signUpBtn}
			/>
			<Box>
				<span>
					Haven't got an account yet?{" "}
					<span>
						<Link className={classes.link} to="/signup">
							Sign up
						</Link>
					</span>
				</span>
			</Box>
		</form>
	);
});

LogInFormView.propTypes = {
	formik: PropTypes.object.isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any,
};
