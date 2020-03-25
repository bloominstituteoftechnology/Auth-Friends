import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import"./App.css"
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';

class App extends React.Component {

    constructor() {
        super();
        this.state = { credentials: {} }
    }

    render() {
        return (
            <div className="Container">
                <Router>
                    <div className="Nav">
                        <Link to='/'><h2>Home</h2></Link>
                        <Link to='/login'><h2>Login</h2></Link>
                        <Link to='/friends-list'><h2>View Friends</h2></Link>    
                        <Link to='/add-friend'><h2>Add Friend</h2></Link>    
                        <Link to='/delete-friend'><h2>Delete Friend</h2></Link>    
                    </div>

                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path='/friends-list' component={FriendsList} />
                        <PrivateRoute exact path='/add-friend' component={AddFriend} />
                        <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
                    </Switch>

                </Router>
            </div>
        )
    }

}

export default App;