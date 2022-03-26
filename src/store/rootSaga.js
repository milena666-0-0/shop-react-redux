import { all } from "redux-saga/effects";

import { watchRequest } from "../api/watchRequest";
import { logInWatcher } from "./loadCartSaga";

function* rootSaga() {
	yield all([watchRequest(), logInWatcher()]);
}

export default rootSaga;
