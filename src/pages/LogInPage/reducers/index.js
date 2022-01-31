import { handleActions } from "redux-actions";

import * as actions from "../actions/index";
import {localStorageKeys} from '../../../constants/localStorageKeys';

const defaultState = {
	isLoading: false,
	errors: null,
	userData: {},
	isAuth: false,
	accessToken: null,
};

export const signInReducer = handleActions(
	{
		[actions.SIGN_IN_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
			const { accessToken, ...userData } = payload.response;

            localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
            
			return {
				...state,
				isLoading: false,
				isAuth: true,
				userData,
				accessToken,
			};
		},
		[actions.SIGN_IN_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},
	},
	defaultState
);
