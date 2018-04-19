import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchFriends, createFriends } from "./actions/fetchFriends";
import { connect } from "react-redux";
import Friends from "./components/Friends";
import CreateFriendsForm from "./components/CreateFriendsForm";

class App extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  componentDidMount() {
    this.props.fetchFriends();
  }
  handleNewFriend = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log("PROPS", this.props);
    // console.log(this.state.name);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Render CreateFriendForm here - fire action from App*/}
        <CreateFriendsForm
          createFriends={this.props.createFriends}
          handleNewFriend={this.props.handleNewFriend}
        />
        {/* Render Friends here - send list of friends as props */}
        <Friends friendsList={this.props.friends} />
      </div>
    );
  }
}

// mapStateToProps here and connect App with Redux store
const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, { fetchFriends, createFriends })(App);
