import { put, takeEvery } from "redux-saga/effects";

import { localStorageKeys } from "../constants/localStorageKeys";
import { CART_REQUEST } from "../pages/Cart/actions/index";
import { SIGN_IN_SUCCESS } from "../pages/LogInPage/actions/index";

export function* loadCart() {
	const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

	if (token) {
		yield put(CART_REQUEST());
	};
};

export function* logInWatcher() {
	yield takeEvery(SIGN_IN_SUCCESS, loadCart);
};
