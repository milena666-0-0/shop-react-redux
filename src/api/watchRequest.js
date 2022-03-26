import { takeEvery, put, call } from "redux-saga/effects";

import { isApiCallAction, createActionWithPostfix } from "../utils/index";
import { apiCallsMapping } from "./apiCallsMapping";
import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";

function* watchRequestWorker(action) {
	try {
		const foundApiCall = apiCallsMapping(action);

		const response = yield call(foundApiCall, action.payload);

		yield put(
			createActionWithPostfix(
				action,
				REQUEST_POSTFIXES.SUCCESS,
				response.data
			)
		);
	} catch (e) {
		yield put(
			createActionWithPostfix(action, REQUEST_POSTFIXES.FAIL, e.message)
		);
	}
}

export function* watchRequest() {
	yield takeEvery(isApiCallAction, watchRequestWorker);
}
