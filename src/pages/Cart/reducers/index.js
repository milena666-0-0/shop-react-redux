import { handleActions } from "redux-actions";
import { cloneDeep } from "lodash";

import * as actions from "../actions/index";

const defaultState = {
	itemsList: [],
	orders: [],
	quantity: 0,
	totalPrice: 0,
	isLoading: false,
	errors: null,
};

export const cartReducer = handleActions(
	{
		[actions.ADD_TO_CART]: (state, { payload }) => {
			const copy = cloneDeep(state.itemsList);

			const newCopy = [...copy, payload];

			return {
				...state,
				totalPrice: state.totalPrice + payload.weight,
				quantity: state.quantity + payload.quantity,
				itemsList: newCopy,
				isLoading: false,
				errors: null,
			};
		},

		[actions.REMOVE_FROM_CART]: (state, { payload }) => {
			const itemsListcopy = cloneDeep(state.itemsList);

			const itemToRemove = itemsListcopy.find(
				(item) => item.id === payload
			);

			const updatedItemsList = itemsListcopy.filter(
				(item) => item.id !== payload
			);

			return {
				...state,
				totalPrice:
					state.totalPrice -
					itemToRemove.weight * itemToRemove.quantity,
				quantity: state.quantity - itemToRemove.quantity,
				itemsList: updatedItemsList,
				isLoading: false,
				errors: null,
			};
		},

		[actions.UPDATE_QUANTITY]: (state, { payload }) => {
			const itemsListCopy = cloneDeep(state.itemsList);

			const findUpdatedItem = itemsListCopy.find(
				(item) => item.id === payload.id
			);

			findUpdatedItem.quantity = payload.quantity;

			const newQuantity = itemsListCopy.reduce((acc, item) => {
				return acc + item.quantity;
			}, 0);

			const newTotalPrice = itemsListCopy.reduce((acc, item) => {
				return acc + item.quantity * item.weight;
			}, 0);

			return {
				...state,
				totalPrice: newTotalPrice,
				quantity: newQuantity,
				itemsList: itemsListCopy,
				isLoading: false,
				errors: null,
			};
		},

		[actions.MAKE_ORDER]: (state, { payload }) => {
			const copy = cloneDeep(state.orders);

			return {
				...state,
				itemsList: [],
				orders: [...copy, payload],
				quantity: 0,
				totalPrice: 0,
				isLoading: false,
				errors: null,
			};
		},
	},
	defaultState
);
