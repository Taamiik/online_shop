import { call, put, takeLatest } from "redux-saga/effects";

import { AxiosService } from "../../../utils/axiosClient";
import { actions as actionsHome } from ".";
import { productsType } from "../types";

export function* getAll(_action: ReturnType<typeof actionsHome.getAll>) {
  const data: Array<productsType> = yield call(AxiosService.get, { url: "/products" });
  yield put(actionsHome.getAllSuccess(data))
}

export default function* homePageWatcher() {
  yield takeLatest(actionsHome.getAll.type, getAll);
}
