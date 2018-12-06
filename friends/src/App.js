import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';

// Components
import FriendsListView from './views/FriendsListView';

class App extends Component {
  render() {
    return (
      <Route exact path='/' component={FriendsListView}/>
    );
  }
}

export default App;
