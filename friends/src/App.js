import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./Components/Login"
import FriendsList from "./Components/FriendsList"
import AddFriend from "./Components/AddFriend"
import UpdateFriend from "./Components/UpdateFriend"
import DeleteFriend from "./Components/DeleteFriend"
import PrivateRoute from "./Components/PrivateRoute"


class App extends React.Component {
  constructor() {
    super();
    this.state = { credentials: {} }
  }
  render() {
    return (
      <Router>
        <Link to='/login'>Login</Link>
        <Link to='/friends-list'>Friends List</Link>
        <Link to='/add-friend'>Add Friend</Link>
        <Link to='/update-friend'>Update Friend</Link>
        <Link to='/delete-friend'>Delete Friend</Link>

        <Switch>

			
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
          <PrivateRoute exact path='/friends-list' component={FriendsList} />
          <PrivateRoute exact path='/update-friend' component={UpdateFriend} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
export default App;