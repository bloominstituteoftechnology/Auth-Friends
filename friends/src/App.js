import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: "",
      friendAge: "",
      friendEmail: ""
    }
  }

  componentDidMount() { this.props.fetchFriends() }

  handleAddFriend = () => {
    const newFriend = {
      name: this.state.friendName,
      age: +this.state.friendAge,
      email: this.state.friendEmail
    }
    this.props.addFriend(newFriend);
    this.setState({ friendName: "", friendAge: "", friendEmail: "" });
  }

  friendForm = () => {
    return (
      <div>
        <input 
          type="text"
          placeholder="name"
          name="friendName"
          value={this.state.friendName}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input 
          type="text"
          placeholder="age"
          name="friendAge"
          value={this.state.friendAge}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input 
          type="text"
          placeholder="email"
          name="friendEmail"
          value={this.state.friendEmail}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <button onClick={this.handleAddFriend}>add</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.friendForm()}
        {this.props.friends.map((friend, index) => (
          <div key={friend+index}>
            <div>{friend.name}</div>
            <div>{friend.email}</div>
            <div>{friend.age}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { fetchFriends, addFriend })(App);