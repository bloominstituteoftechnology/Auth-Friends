import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
                        component={FriendsHomePage}
                    />
                    <Route path="/login" component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
