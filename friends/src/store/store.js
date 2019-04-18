import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, logger))
);