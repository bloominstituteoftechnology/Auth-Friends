import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

import './index.css';


ReactDOM.render(
<Provider store={createStore(rootReducer)}>
  <App />
</Provider>, 
document.getElementById('root')
);

