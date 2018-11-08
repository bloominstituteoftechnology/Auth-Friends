import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/update/:id" component={UpdateFriendForm} />

        <h1>Friends List!</h1>
        <CreateFriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
