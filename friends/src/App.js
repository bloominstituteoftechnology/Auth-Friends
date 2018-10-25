import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends, addFriend, updateFriend } from "./actions";

import "./App.css";

import FriendList from "./components/FriendList";
import Form from "./components/Form";

const blankFormValues = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      },
      friendToUpdate: null,
      showUpdateForm: false
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: blankFormValues
    });
  };

  handleUpdate = id => {
    const friendToUpdate = this.props.friends.find(friend => friend.id === id);
    this.setState({
      friendToUpdate,
      newFriend: friendToUpdate,
      showUpdateForm: true
    });
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    this.props.updateFriend(this.state.newFriend);
    this.setState({
      newFriend: blankFormValues,
      showUpdateForm: false
    });
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({
      showUpdateForm: false,
      newFriend: blankFormValues
    });
  };

  render() {
    return this.props.isFetching ? (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="App">
        <FriendList
          friends={this.props.friends}
          handleUpdate={this.handleUpdate}
        />
        <Form
          newFriend={this.state.newFriend}
          handleChange={this.handleChange}
          handleSubmit={this.handleAddFriend}
          handleSubmitUpdate={this.handleSubmitUpdate}
          isUpdating={this.state.updating}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error,
    addingFriend: state.addingFriend,
    updatingFriend: state.updatingFriend
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend, updateFriend }
)(App);
