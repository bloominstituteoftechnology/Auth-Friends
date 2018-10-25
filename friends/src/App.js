import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import FriendsList from "./components/FriendsList";
import CreateFriendForm from "./components/CreateFriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";
import { fetchFriends, addFriend, deleteFriend, updateFriend } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      isEditing: false,
      uname: "",
      uage: "",
      uemail: "",
      editingId: ""
    };
  }
  componentDidMount() {
    this.props.fetchFriends();
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addToFriends = e => {
    e.preventDefault();
    this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({ name: "", age: "", email: "" });
  };
  toggleOnEditing = (name, age, email, id) => {
    this.setState({
      isEditing: !this.state.isEditing,
      uname: name,
      uage: age,
      uemail: email,
      editingId: id
    });
  };
  updateToFriends = e => {
    e.preventDefault();
    this.props.updateFriend(
      {
        id: this.state.editingId,
        name: this.state.uname,
        age: this.state.uage,
        email: this.state.uemail
      },
      this.state.editingId
    );
    this.setState({
      isEditing: false,
      editingId: "",
      uname: "",
      uage: "",
      uemail: ""
    });
  };
  render() {
    return (
      <div className="app">
        <h1>Welcome to Redux-Friends!</h1>
        <div className="appComponents">
          {this.props.fetchingFriends ? (
            <h2>Fetching Friends List...</h2>
          ) : (
            <FriendsList
              friends={this.props.friends}
              deleteFriend={this.props.deleteFriend}
              toggleOnEditing={this.toggleOnEditing}
            />
          )}
          <div>
            {this.state.isEditing && (
              <UpdateFriendForm
                name={this.state.uname}
                age={this.state.uage}
                email={this.state.uemail}
                handleInput={this.handleInput}
                updateToFriends={this.updateToFriends}
              />
            )}
            <CreateFriendForm
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              handleInput={this.handleInput}
              addToFriends={this.addToFriends}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend, deleteFriend, updateFriend }
)(App);
