import React, { Component } from 'react';
import './App.css';

import CreateFriendsForm from "./components/CreateFriendsForm";
import UpdateFriendsForm from "./components/UpdateFriendsForm";
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div>
        <h1>So Many Friends....</h1>
        <CreateFriendsForm />
        <UpdateFriendsForm />
        <Friends />
        
      </div>
    );
  }
}

export default App;
