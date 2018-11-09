import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import AddFriend from './containers/AddFriend';
import Friends from './containers/Friends';

const App = () => (
  <div className="App">
    <NavLink to="/add">Add Friend</NavLink>
    <Route path="/add" component={AddFriend} />
    <Friends />
  </div>
);

export default App;
