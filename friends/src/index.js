import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import friends from './reducers';


const loggerMiddleware = createLogger()

const store = createStore(
  friends,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
)

ReactDOM.render(
<Provider store={store}>
<App store={store}/>
</Provider>,


 document.getElementById('root'));
registerServiceWorker();
