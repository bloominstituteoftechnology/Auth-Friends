import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import { connect } from "react-redux";
import axios from "axios";

class App extends Component {
  state = {
    friendsFetching: false,
    friendsFetched: false,
    friendsSaved: false,
    friendsSaving: false,
    updatingFriend: false,
    updatedFriend: false,
    deletingFriend: false,
    deletedFriend: false,
    friends: [],
    error: null
  };

  render() {
    return (
      <div className="App">
        <h2>A list of my Friends</h2>
        <FriendList />
      </div>
    );
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState( { friends: response.data });
      })
      .catch(error => {
        console.error('error', error);
      });
  };
} // App Component


const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, {})(App);
