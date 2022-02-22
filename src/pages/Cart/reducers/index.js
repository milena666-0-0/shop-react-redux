import { handleActions } from "redux-actions";
import { cloneDeep } from "lodash";

import * as actions from "../actions/index";

const defaultState = {
	cart: {},
	isLoading: false,
	errors: null,
};

export const cartReducer = handleActions(
	{
		[actions.CART_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[actions.CART_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				cart: payload.response,
				isLoading: false,
				errors: null,
			};
		},
		[actions.CART_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},

		[actions.ADD_TO_CART_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[actions.ADD_TO_CART_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				cart: payload.response,
				isLoading: false,
				errors: null,
			};
		},
		[actions.ADD_TO_CART_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},

		[actions.REMOVE_FROM_CART_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[actions.REMOVE_FROM_CART_SUCCESS]: (state, { payload }) => {
			const itemsListcopy = cloneDeep(state.cart.itemsList);

			const removedItemId = payload.response.removedItemId;

			const updatedItemsList = itemsListcopy.filter(
				(item) => item.id !== removedItemId
			);

			const updatedCart = {
				...state.cart,
				itemsList: updatedItemsList,
				...payload.response.cartState,
			};

			return {
				...state,
				cart: updatedCart,
				isLoading: false,
				errors: null,
			};
		},
		[actions.REMOVE_FROM_CART_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},

		[actions.UPDATE_QUANTITY_REQUEST]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[actions.UPDATE_QUANTITY_SUCCESS]: (state, { payload }) => {
			const itemsListCopy = cloneDeep(state.cart.itemsList);

			const updatedItem = payload.response.updatedItem;

			const findUpdatedItem = itemsListCopy.find(
				(item) => item.id === updatedItem.id
			);

			findUpdatedItem.quantity = updatedItem.quantity;

			const updatedCart = {
				...state.cart,
				itemsList: itemsListCopy,
				...payload.response.cartState,
			};

			return {
				...state,
				cart: updatedCart,
				isLoading: false,
				errors: null,
			};
		},
		[actions.UPDATE_QUANTITY_FAIL]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},
	},
	defaultState
);
