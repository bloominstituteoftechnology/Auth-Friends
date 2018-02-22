//here the react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import Friends from './components/Friends';
//the redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friend from './reducers/Reducers';

import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = createStore(friend);

ReactDOM.render(
    <Provider store={store}>
        <Friends />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
