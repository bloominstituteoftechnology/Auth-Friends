import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul className="Routes">
        <li>
             <Link to="/">Home</Link>
        </li>
        <li>
             <Link to="/login">Log In</Link>
        </li>
        <li>
             <Link to="/add">Add Friend</Link>
        </li>
      </ul>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddFriend}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
