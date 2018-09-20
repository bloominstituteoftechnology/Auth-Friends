import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import HomeView from './views/HomeView';
import './App.css';
import FriendListView from './views/FriendListView';
import FriendFormView from './views/FriendFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink exact to="/">
               Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/friends'>
                Friends
            </NavLink>
          </li>
          <li>
            <NavLink to='/friend-form'>
                Add Friend
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/friends" component={FriendListView} />
        <Route path='/friend-form' component={FriendFormView} />
      </div>
    );
  }
}

export default withRouter(App);
