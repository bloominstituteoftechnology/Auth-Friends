import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/friendsReducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore( rootReducer, applyMiddleware(thunk,logger));
ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, 

document.getElementById('root'));
registerServiceWorker();