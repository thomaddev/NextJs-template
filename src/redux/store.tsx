import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, Store} from 'redux';
import {createWrapper} from 'next-redux-wrapper';

import reducers from "./reducers";
import sagas from "./sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(reducers, applyMiddleware(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(sagas);
  return store;
};
export const wrapper = createWrapper<Store>(makeStore, {debug: true});
