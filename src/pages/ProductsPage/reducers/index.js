import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const defaultState = {
	productsData: [],
	isLoading: false,
	errors: null,
};

export const productsReducer = handleActions(
	{
		[actions.PRODUCTS_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		[actions.PRODUCTS_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				productsData: payload.response,
				errors: null,
				isLoading: false,
			};
		},
		[actions.PRODUCTS_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},
	},
	defaultState
);
