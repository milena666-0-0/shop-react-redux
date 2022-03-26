import { handleActions, combineActions } from "redux-actions";
import { cloneDeep } from "lodash";

import * as actions from "../actions/index";

const defaultState = {
	itemsList: [],
	orders: [],
	quantity: 0,
	totalPrice: 0,
	customerId: null,
	isLoading: false,
	errors: null,
};

export const cartReducer = handleActions(
	{
		[combineActions(
			actions.CART_REQUEST,
			actions.ADD_TO_CART_REQUEST,
			actions.REMOVE_FROM_CART_REQUEST,
			actions.UPDATE_QUANTITY_REQUEST,
			actions.MAKE_ORDER_REQUEST,
			actions.GET_ORDERS_REQUEST
		)]: (state) => {
			return {
				...state,
				isLoading: true,
				errors: null,
			};
		},
		[combineActions(actions.CART_SUCCESS, actions.ADD_TO_CART_SUCCESS)]: (
			state,
			{ payload }
		) => {
			const { totalPrice, quantity, itemsList, customerId } = payload.response;

			return {
				...state,
				totalPrice,
				quantity,
				itemsList,
				customerId,
				isLoading: false,
				errors: null,
			};
		},

		[actions.REMOVE_FROM_CART_SUCCESS]: (state, { payload }) => {
			const { cartState, removedItemId } = payload.response;

			const itemsListcopy = cloneDeep(state.itemsList);

			const updatedItemsList = itemsListcopy.filter(
				(item) => item.id !== removedItemId
			);

			return {
				...state,
				...cartState,
				itemsList: updatedItemsList,
				isLoading: false,
				errors: null,
			};
		},

		[actions.UPDATE_QUANTITY_SUCCESS]: (state, { payload }) => {
			const { updatedItem, cartState } = payload.response;

			const itemsListCopy = cloneDeep(state.itemsList);

			const findUpdatedItem = itemsListCopy.find(
				(item) => item.id === updatedItem.id
			);

			findUpdatedItem.quantity = updatedItem.quantity;

			return {
				...state,
				...cartState,
				itemsList: itemsListCopy,
				isLoading: false,
				errors: null,
			};
		},

		[actions.MAKE_ORDER_SUCCESS]: (state) => {
			return {
				...state,
				itemsList: [],
				isLoading: false,
				errors: null,
			};
		},

		[actions.GET_ORDERS_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				orders: payload.response,
				isLoading: false,
				errors: null,
			};
		},

		[combineActions(
			actions.CART_FAIL,
			actions.ADD_TO_CART_FAIL,
			actions.REMOVE_FROM_CART_FAIL,
			actions.UPDATE_QUANTITY_FAIL,
			actions.MAKE_ORDER_FAIL,
			actions.GET_ORDERS_FAIL
		)]: (state, { payload }) => {
			return {
				...state,
				isLoading: false,
				errors: payload.response,
			};
		},
	},
	defaultState
);
