import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import {
  fetchFriends,
  deleteFriend,
  editFriend,
  editForm
} from "./actions/actions";
import FriendsForm from "./components/components";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  handleDelete = id => {
    this.props.deleteFriend(id);
  };

  handleEdit = () => {
    this.props.editFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: this.props.id
    });
  };

  updateFriendsHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editForm = id => {
    this.props.editForm(id);
  };

  render() {
    if (this.props.editingFriend === true) {
      return (
        <form>
          <input
            type="text"
            name="name"
            onChange={this.updateFriendsHandler}
            // value={this.state.name}
            placeholder="add friend name"
          />
          <br />
          <input
            type="number"
            name="age"
            onChange={this.updateFriendsHandler}
            // value={this.state.age}
            placeholder="add age"
          />
          <br />
          <input
            type="text"
            name="email"
            onChange={this.updateFriendsHandler}
            // value={this.state.email}
            placeholder="add email"
          />
          <br />
          <button onClick={this.handleEdit}>Submit</button>
        </form>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux Friends</h1>
        </header>
        <ul>
          {this.props.friends.map(friends => {
            return (
              <div>
                <li key={friends.id}> {friends.name} </li>
                <button
                  id={friends.id}
                  onClick={() => this.handleDelete(friends.id)}
                >
                  delete
                </button>
                <button
                  id={friends.id}
                  onClick={() => this.editForm(friends.id)}
                >
                  edit
                </button>
              </div>
            );
          })}
        </ul>
        <FriendsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    editingFriend: state.editingFriend,
    error: state.error,
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    deleteFriend,
    editFriend,
    editForm
  }
)(App);
