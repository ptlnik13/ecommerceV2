import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {persistStore, persistReducer} from "redux-persist";
import Storage from 'redux-persist/lib/storage'

import {rootReducer} from "./root-reducer";

const persistConfig = {
    key: 'root',
    storage: Storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== 'development' && logger].filter(Boolean);
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store);