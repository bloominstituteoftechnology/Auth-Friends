import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import FriendList from './FriendList';
import './App.css';
import AddFriend from './CreateFriendForm';
import UpdateFriend from './UpdateFriendForm';

const App = props => {
  return (
    <div className="App">
      <NavLink to='/CreateFriendForm'>Create your new Friend</NavLink>
      <Route path='/CreateFriendForm' component={ AddFriend } />
      <Route path='/update/:id' component={ UpdateFriend } />

      <h1>Look at all of your Friends</h1>
      <FriendList />
    </div>
  );
}


export default App;
