import React, { Component } from 'react';
// import { Route, NavLink } from 'react-router-dom';
import axios from "axios";

import Friends from './components/Friends'
import FriendForm from './components/FriendForm'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response)
      this.setState({ friends: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  addNewFriend = data => {
    axios.post('http://localhost:5000/friends', data) 
    .then(response => {
      console.log(response);
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
  }

   

  render() {
    return (
      <div className="App">
        {/* <div className="nav-links">
          <NavLink exact to="/">Home</NavLink>
        </div> */}
        <div className="wrapper">
          <div className="content-wrapper">
            <Friends friends={this.state.friends} deleteFriend={this.deleteFriend}/>
          </div>  
          <div className="form-wrapper">
            <FriendForm addNewFriend={this.addNewFriend}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
