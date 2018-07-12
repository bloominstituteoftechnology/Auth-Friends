import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingData } from "../actions/index";
import { saveFriend } from "../actions/index";

class CreateFriend extends Component {
  handleChangeFriend = e => {
    this.setState({ [e.target.name]: e.target.value });
    return e.target.value;
  };

  handleSubmitFriend = () =>{
  this.props.saveFriend({
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  })
  }

  render() {
    return (
      <div className="addForm">
        <div>
          <h2>Add New Friend!</h2>
          <input
            className="input"
            type="text"
            onChange={this.handleChangeFriend}
            placeholder="Name"
            name="name"
          />
          <input
            className="input"
            type="text"
            onChange={this.handleChangeFriend}
            placeholder="Age"
            name="age"
          />
          <input
            className="input"
            type="text"
            onChange={this.handleChangeFriend}
            placeholder="Email"
            name="email"
          />
        </div>
        <button onClick={this.handleSubmitFriend}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    savingFriends: state.savingFriends
  };
};

export default connect(
  mapStateToProps,
  { fetchingData, saveFriend }
)(CreateFriend);
