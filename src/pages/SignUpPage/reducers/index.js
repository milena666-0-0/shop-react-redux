import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const defaultState = {
	userData: {},
	errors: null,
	isLoading: false,
};

export const signUpReducer = handleActions(
	{
		[actions.SIGN_UP_REQUEST]: (state) => {
			return {
				...state,
				errors: null,
				isLoading: true,
			};
		},
        [actions.SIGN_UP_SUCCESS]: (state) => {
			return {
				...state,
				errors: null,
				isLoading: false,
			};
		},
        [actions.SIGN_UP_FAIL]: (state, {payload}) => {
			return {
				...state,
				errors: payload.response,
				isLoading: false,
			};
		},
	},
	defaultState
);
