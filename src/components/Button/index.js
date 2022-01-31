import { ButtonUnstyled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';

import {styles} from './styles';

const useStyles = makeStyles(styles);

export const Button = ({label, img = null, classname, disabled}) => {

    const classes= useStyles();
    
    const btnClass = disabled ? classes.disbledButton : classes.button ;

	return(
        <ButtonUnstyled disabled={disabled}  type="submit" className={`${classname} ${btnClass}`}>
            {label}
            {img ? img : null}
        </ButtonUnstyled>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    classname: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
};
