import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import {PrivateRoute} from './PrivateRoute';

function App() {
  let [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/friends" component={FriendsList} render ={() => <FriendsList setFriends={setFriends} friends={friends}/>} />
        <PrivateRoute path="/AddFriend" component={AddFriend} render={() => <AddFriend setFriends={setFriends} />} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} /> 
      </Switch>
    </div>
  );
}

export default App;
