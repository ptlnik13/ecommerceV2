import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {persistStore, persistReducer} from "redux-persist";
import Storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from "./root-reducer";
import {rootSaga} from "./root-saga";

const persistConfig = {
    key: 'root',
    storage: Storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) // if dev tools exists the use this compose.
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);