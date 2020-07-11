import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {FriendsProvider} from "./contexts/FriendsContext";

ReactDOM.render(
    <Router>
        <FriendsProvider>
            <App/>
        </FriendsProvider>
    </Router>,
document.getElementById('root')
)
;

serviceWorker.unregister();
