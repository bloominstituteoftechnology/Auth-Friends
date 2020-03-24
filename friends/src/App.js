import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


class App extends React.Component {

    constructor() {
        super();
        this.state = { credentials: {} }
    }

    render() {
        return (
            <div className="Container">
                <Router>

                    <Link to='/'><h2>Home</h2></Link>
                    <Link to='/login'><h2>Login</h2></Link>
                    <Link to='/friends-list'><h2>View Friends</h2></Link>    
        
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path='/friends-list' component={FriendsList} />
                    </Switch>

                </Router>
            </div>
        )
    }

}
export default App;