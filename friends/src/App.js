import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchFriends, addFriend } from "./actions";
import { connect } from "react-redux";
import Friend from './components/Friend';

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = () => {
    this.props.addFriend({name: this.state.name, age: this.state.age, email: this.state.email});
    this.setState({name: '', age: '', email: ''});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is one awesome Friends List</h1>
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
          <button type='submit'>Add Friend</button>
        </form>
        {this.props.friends.map(friend => (
          <Friend key={`friend${friend.id}`} friend={friend}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { fetchFriends, addFriend })(App);
