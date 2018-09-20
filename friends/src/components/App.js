import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import FriendsView from './view/FriendsView';
import AddView from './view/AddView';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/add-friend">
            Add New
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={FriendsView} />
      <Route exact path="/add-friend" component={AddView} />
      </div>
    );
  }
}

export default withRouter(App);
