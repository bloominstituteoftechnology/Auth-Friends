import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './components/App';
import FriendsReducer from './reducers/friendsReducer'

const middleware = applyMiddleware(thunk)
const store = createStore(FriendsReducer, middleware)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));
