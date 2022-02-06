import { REQUEST_POSTFIXES } from "../constants/requestPostfixes";

export const isApiCallAction = (action) =>
	action.type.endsWith(REQUEST_POSTFIXES.REQUEST);
