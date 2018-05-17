import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// Redux Stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Other stuff
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { friendsReducer } from './reducers';

const store = createStore(friendsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
