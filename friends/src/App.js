import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends, addFriend, updateFriend, deleteFriend } from "./actions";

import "./App.css";

import FriendList from "./components/FriendList";
import Form from "./components/Form";

const Spinner = require("react-spinkit");

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
      showUpdateForm: false,
      formOpen: false
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

  openForm = event => {
    event.preventDefault();
    this.setState({
      formOpen: true
    });
  };

  handleAddFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: blankFormValues,
      formOpen: false
    });
  };

  handleUpdate = id => {
    const friendToUpdate = this.props.friends.find(friend => friend.id === id);
    this.setState({
      friendToUpdate,
      newFriend: friendToUpdate,
      showUpdateForm: true,
      formOpen: true
    });
  };

  handleDelete = id => {
    this.props.deleteFriend(id);
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    this.props.updateFriend(this.state.newFriend);
    this.setState({
      newFriend: blankFormValues,
      showUpdateForm: false,
      formOpen: false
    });
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({
      showUpdateForm: false,
      formOpen: false,
      newFriend: blankFormValues
    });
  };

  render() {
    return this.props.isFetching ? (
      <div className="App">
        <Spinner
          name="ball-pulse-sync"
          fadeIn="none"
          style={{ width: "96px", height: "96px" }}
        />
      </div>
    ) : (
      <div className="App">
        <div className="open-form">
          <button onClick={this.openForm}>+</button>
        </div>
        <FriendList
          friends={this.props.friends}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        <Form
          newFriend={this.state.newFriend}
          handleChange={this.handleChange}
          isUpdating={this.state.updating}
          handleCancel={this.handleCancel}
          formOpen={this.state.formOpen}
          title={
            this.state.showUpdateForm ? "Update a Friend" : "Submit New Friend"
          }
          formSubmit={
            this.state.showUpdateForm
              ? this.handleSubmitUpdate
              : this.handleAddFriend
          }
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
    updatingFriend: state.updatingFriend,
    deletingFriend: state.deleteFriend
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend, updateFriend, deleteFriend }
)(App);
