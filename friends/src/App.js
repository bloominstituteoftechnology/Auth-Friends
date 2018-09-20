import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import HomeView from './views/HomeView';
import './App.css';

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
        </ul>
        <Route exact path="/" component={HomeView} />
      </div>
    );
  }
}

export default withRouter(App);
