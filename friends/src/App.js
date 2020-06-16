import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/PrivateRoute';

function App() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/protected' component={Friends}/>
                <Route path='/login' component={Login}/>
                <Route component={Login}/>
            </Switch>
        </div>
        </Router>
    )
}

export default App;