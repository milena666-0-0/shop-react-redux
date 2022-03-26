import { createAction } from "redux-actions";

export const CART_REQUEST = createAction("CART_REQUEST");
export const CART_SUCCESS = createAction("CART_SUCCESS");
export const CART_FAIL = createAction("CART_FAIL");

export const ADD_TO_CART_REQUEST = createAction("ADD_TO_CART_REQUEST");
export const ADD_TO_CART_SUCCESS = createAction("ADD_TO_CART_SUCCESS");
export const ADD_TO_CART_FAIL = createAction("ADD_TO_CART_FAIL");

export const REMOVE_FROM_CART_REQUEST = createAction("REMOVE_FROM_CART_REQUEST");
export const REMOVE_FROM_CART_SUCCESS = createAction("REMOVE_FROM_CART_SUCCESS");
export const REMOVE_FROM_CART_FAIL = createAction("REMOVE_FROM_CART_FAIL");


export const UPDATE_QUANTITY_REQUEST = createAction("UPDATE_QUANTITY_REQUEST");
export const UPDATE_QUANTITY_SUCCESS = createAction("UPDATE_QUANTITY_SUCCESS");
export const UPDATE_QUANTITY_FAIL = createAction("UPDATE_QUANTITY_FAIL");


export const MAKE_ORDER_REQUEST = createAction("MAKE_ORDER_REQUEST");
export const MAKE_ORDER_SUCCESS = createAction("MAKE_ORDER_SUCCESS");
export const MAKE_ORDER_FAIL = createAction("MAKE_ORDER_FAIL");


export const GET_ORDERS_REQUEST = createAction("GET_ORDERS_REQUEST");
export const GET_ORDERS_SUCCESS = createAction("GET_ORDERS_SUCCESS");
export const GET_ORDERS_FAIL = createAction("GET_ORDERS_FAIL");


