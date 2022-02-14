import { ButtonUnstyled } from "@mui/material";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

export const Button = ({ label, img = null, classname, disabled }) => {
	const classes = useStyles();

	const btnClass = disabled ? classes.disabledButton : classes.button;

	return (
		<ButtonUnstyled
			disabled={disabled}
			type="submit"
			className={`${classname} ${btnClass}`}
		>
			{label}
			{img ? img : null}
		</ButtonUnstyled>
	);
};

Button.propTypes = {
	label: PropTypes.any,
	classname: PropTypes.string,
	disabled: PropTypes.bool,
};
