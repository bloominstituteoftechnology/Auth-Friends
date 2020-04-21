import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRouter from './components/PrivateRouter';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/protected">Friends Home Page</Link>
                        </li>
                    </ul>
                </header>
                <Switch>
                    <PrivateRouter
                        exact
                        path="/protected"
                        component={FriendsList}
                    />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
