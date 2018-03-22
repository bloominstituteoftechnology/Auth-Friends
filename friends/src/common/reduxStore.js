import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;