import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''

    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        // console.log(response.data);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  textInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveFriendData = (event) => {
    event.preventDefault();
    const id = (this.state.friends[this.state.friends.length - 1].id + 1)
    const friend = {id: id, name: this.state.name, age: this.state.age, email: this.state.email};

    axios
      .post('http://localhost:5000/api/friends', friend)

      .then(response => 
            this.setState({ friends: response.data, name: '', age: '', email: ''})
          )
      .catch(err => {
        console.log(err);
      });
    // this.setState({name: '', age: '', email: ''});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
                
        <div>
        <FriendForm 
            name={this.state.name} 
            age={this.state.age} 
            email={this.state.email} 
            saveFriendData={this.saveFriendData}
            textInputHandler={this.textInput}
        />
        </div>
        <div>
        <FriendsList friendsList={this.state.friends} />
        </div>
      </div>
    );
  }
}

export default App;


