import { all } from "redux-saga/effects";

import translate from "./counter";

export default function* rootSaga() {
  yield all([translate()]);
}
