/*
 
  ___   ___  ___  _  _  _  _     ____  _  _  _  _  _  _  _ _     _    ___  ___   __  ___  _  _  ___   ___ 
 (  ,) (  _)(   \( )( )( \/ )___(_  _)( )( )( )( )( \( )( ) )   (_)  (  _)(  ,) (  )(  _)( \( )(   \ / __)
  )  \  ) _) ) ) ))()(  )  ((___) )(   )__(  )()(  )  (  )  \    _    ) _) )  \  )(  ) _) )  (  ) ) )\__ \
 (_)\_)(___)(___/ \__/ (_/\_)    (__) (_)(_) \__/ (_)\_)(_)\_)  (_)  (_)  (_)\_)(__)(___)(_)\_)(___/ (___/
 
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers'

const store = createStore( combineReducers, applyMiddleware(thunk, logger) )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
 
