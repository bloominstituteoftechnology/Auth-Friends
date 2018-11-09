import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import AddFriend from './containers/AddFriend';
import UpdateFriend from './containers/UpdateFriend';
import Friends from './containers/Friends';

const App = () => (
  <div className="App">
    <NavLink to="/add">Add Friend</NavLink>
    <Route path="/add" component={AddFriend} />
    <Route path="/update/:id" component={UpdateFriend} />
    <Friends />
  </div>
);

export default App;
