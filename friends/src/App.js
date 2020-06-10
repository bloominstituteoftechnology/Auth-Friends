import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login';
import FriendsList from "./components/friends";
import AddFriend from './components/AddFriends';
import PrivateRoute from './components/PrivateRoute';


class App extends React.Component {
  state = { credentials: {} }
  
  render() {
    return (
      <Router>
        <Link to='/login'>Login</Link>
        <Link to='/friends-list'>Friends List</Link>
        <Link to='/add-friend'>Add Friend</Link>

        <Switch>
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <PrivateRoute exact path='/friends-list' component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
export default App;