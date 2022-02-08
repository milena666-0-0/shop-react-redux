import {createAction} from 'redux-actions';

export const PRODUCTS_REQUEST = createAction('PRODUCTS_REQUEST');
export const PRODUCTS_SUCCESS = createAction('PRODUCTS_SUCCESS');
export const PRODUCTS_FAIL = createAction('PRODUCTS_FAIL');