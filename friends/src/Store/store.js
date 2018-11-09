import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import friendsReducer from '../Reducers/friendsReducer';

const middleware = applyMiddleware(logger, thunk)

const store = createStore(friendsReducer, middleware)
console.log('initial state', store.getState());

export default store;


