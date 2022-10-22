import { handleActions } from "redux-actions";

import * as actions from "../actions/index";
import { localStorageKeys } from "../../../constants/localStorageKeys";

const defaultState = {
	isLoading: false,
	errors: null,
	userData: {},
	isAuth: false,
	accessToken: null,
};

export const signInReducer = handleActions(
	{
		[actions.SIGN_IN]: (state, { payload }) => {
			const { accessToken, ...userData } = payload;
			localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

			const auth = accessToken ? true : false;

			return {
				...state,
				userData,
				accessToken,
				isAuth: auth,
				isLoading: true,
				errors: null,
			};
		},
	},
	defaultState
);
