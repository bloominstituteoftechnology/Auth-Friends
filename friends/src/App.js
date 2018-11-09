import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import Friends from './components/Friends'
import CreateFriendForm from './components/CreateFriendForm'
import UpdateFriendForm from './components/UpdateFriendForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: [],
    }
  }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
        this.setState({ friends: response.data })
    })
    .catch(err => {
        console.log("Fail to GET Friends from data", err)
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Friends in React-Redux.
          </p>
          <CreateFriendForm />
          <Friends friends={this.state.friends} /> 
          <UpdateFriendForm />

        </header>
      </div>
    );
  }
}

export default App;
