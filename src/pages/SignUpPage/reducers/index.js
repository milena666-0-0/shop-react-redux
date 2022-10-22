import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const defaultState = {
	userData: {},
	errors: null,
	isLoading: false,
};

export const signUpReducer = handleActions(
	{
		[actions.SIGN_UP]: (state, { payload }) => {
			return {
				...state,
				userData: payload,
				errors: null,
				isLoading: true,
			};
		},
	},
	defaultState
);
