//DEFAULT IMPORTS
import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
//ADDED IMPORTS
import { Route, NavLink } from 'react-router-dom'
import FriendsList from './FriendsList'
import CreateFriend from './CreateFriend'
import UpdateFriend from './UpdateFriend'

//DEFAULT CODE
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

//ADDED CODE

const App = props => {
  return (
    <div className="App">
      <NavLink to="/create">Create</NavLink>

      <Route path="/create" component={CreateFriend} />
      <Route path="/update/:id" component={UpdateFriend} />

      <h1>Friends ASSEMBLE!</h1>
      <FriendsList />
    </div>
  );
}

export default App;
