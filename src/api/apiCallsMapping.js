import * as signUpActions from '../pages/SignUpPage/actions/index';
import * as signInActions from '../pages/LogInPage/actions/index';
import AuthService from '../services/authService';

export const apiCallsMapping = (action) => {
    const apiCallAction = {
        [signUpActions.SIGN_UP_REQUEST]: AuthService.signUp,
        [signInActions.SIGN_IN_REQUEST]: AuthService.signIn
    };
    return apiCallAction[action.type];
};
