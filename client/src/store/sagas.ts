import { all } from "redux-saga/effects";
import homePageWatcher from "../features/HomePage/ducks/saga";

export function* rootSaga() {
  yield all([homePageWatcher()]);
}
