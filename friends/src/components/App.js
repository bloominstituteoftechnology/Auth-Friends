import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, addFriends } from '../actions';  
import Friend from './Friend';

class App extends Component {
  state = { 
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    this.props.fetchFriends();
  }
  
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = () => {
    this.props.addFriends({name: this.state.name, age: this.state.age, email: this.state.email});
    this.setState({name: '', age: '', email: ''});
  }

// class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kaitlyn's Friend List</h1>
        </header>

      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <input 
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.onInputChange}
        />
        <input 
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <button type='submit'>Add New Friend</button>
      </form>
      {this.props.friends.map(friend => (
        <Friend key={`friend${friend.id}`} friend={friend}/>
      ))}

      </div>
    );
  }
}

const mapStateToProps = friendsReducer => {
  return {
    fetching: friendsReducer.fetching,
    friends: friendsReducer.friends
  };
};
//actions go here
export default connect(mapStateToProps, { fetchFriends, addFriends })(App);
