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
        // friend: {
        //   name: '',
        //   age: '',
        //   email: ''
        // }
    }
  }

  // componentDidMount(){
  //   axios
  //   .get(`http://localhost:5000/api/friends`)
  //   .then(response => {
  //       this.setState({ friends: response.data })
  //   })
  //   .catch(err => {
  //       console.log("Fail to GET Friends from data", err)
  //   })
  // }

  // handleAddNewFriend = friend => {
  //   //event.preventDefault();
  //   axios 
  //   .post(`http://localhost:5000/api/friends`, friend)
  //   .then(response => {
  //     this.setState({ friends: response.data })
  //   })
  //   .catch(err => {
  //     console.log("Fail to ADD Friend", err);
  //   })
  // }

  handleDeleteFriend = id => {
    // console.log(id)
    axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      this.setState({ friends: response.data })
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
          <CreateFriendForm 
            handleAddNewFriend={this.handleAddNewFriend} 
            />
          <Friends 
            friends={this.state.friends} 
            handleDeleteFriend={this.handleDeleteFriend} 
          />
          <UpdateFriendForm />

        </header>
      </div>
    );
  }
}

export default App;
