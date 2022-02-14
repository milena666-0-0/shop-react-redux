import { handleActions } from "redux-actions";

import * as actions from "../actions/index";

const defaultState = {
	pokemonData: {},
	isLoading: false,
	errors: null,
};

export const pokemonDetailsReducer = handleActions(
	{
		[actions.POKEMON_DETAILS_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
			};
		},
		[actions.POKEMON_DETAILS_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				pokemonData: payload.response,
				errors: null,
			};
		},
		[actions.POKEMON_DETAILS_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},
	},
	defaultState
);
