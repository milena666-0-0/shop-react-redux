import { Box, TextField, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import { Button } from "../../../components/Button/index";
import { isSubmitButtonDisabled } from "../../../utils/isSubmitButtonDisabled";
import { Spinner } from "../../../components/Spinner/index";


import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const LogInFormView = ({ formik, errors, isLoading }) => {
	const classes = useStyles();
	const disabled = !isSubmitButtonDisabled(formik) || isLoading;

	return (
		<form className={classes.form} onSubmit={formik.handleSubmit}>
			<div className={classes.formLabel}>Log in</div>
			<TextField
				color="secondary"
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
			{errors ? (
				<FormHelperText className={classes.helper} error={true}>
					Incorrect password or email
				</FormHelperText>
			) : null}

			<Button
				disabled={disabled}
				label={isLoading ? <Spinner /> : "Log in"}
				classname={classes.signUpBtn}
			/>
			<Box>
				<span>
					New user?{" "}
					<span>
						<Link className={classes.link} to="/signup">
							Sign up
						</Link>
					</span>
				</span>
			</Box>
		</form>
	);
};

LogInFormView.propTypes = {
	formik: PropTypes.object.isRequired,
	isLoading: PropTypes.bool,
	errors: PropTypes.any
};



