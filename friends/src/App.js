import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
// import { newFriend } from '../actions';
import axios from 'axios';
// import CreateFriendForm from './components/CreateFriendForm';
// import Friends from './components/Friends';

class App extends Component {
  state = {
    friends: []
  }
  render() {
    return (
      <div className="App">
          {this.state.friends.map((friend, index) => {
            return (
            <ul key={index}>
              <li>{friend.name}</li>
              <li>{friend.age}</li>
              <li>{friend.email}</li>
            </ul>
          )}
          )}
        {/* <CreateFriendForm />
        <Friends /> */}
      </div>
    );
  }
  componentDidMount() { 
    this.loadFriends(); 
  } 

  loadFriends = () => { 
    axios 
      .get('http://localhost:5000/api/friends/get') 
      .then(response => { 
        this.setState({ 
        friends: response.data, 
        }); 
      }) 
      .catch(() => { 
        console.error('error getting data'); 
      }); 
  }; 
  
}

export default App;
