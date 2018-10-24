import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import FriendList from './views/FriendList';
import AddFriend from './views/AddFriend';
import UpdateFriend from './views/UpdateFriend';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>We could be friends</h1>
        <nav className="nav">
          <NavLink exact to="/">
            friends
          </NavLink>
          <NavLink to="/add-friend">add friend</NavLink>
        </nav>

        {/* ROUTES */}
        <Route exact path="/" component={FriendList} />
        <Route path="/add-friend" component={AddFriend} />
        <Route path="/update-friend/:id" component={UpdateFriend} />
      </div>
    );
  }
}

export default App;
