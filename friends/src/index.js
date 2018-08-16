import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FriendsListContainer from './containers/FriendsListContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import {friendsReducer} from './reducers/friendsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(friendsReducer, applyMiddleware(thunk,logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
                    <FriendsListContainer />
                </Provider>, document.getElementById('root'));

