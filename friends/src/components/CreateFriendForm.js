import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions";

export class CreateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props.friends,
      newFriendId: this.props.friends.length,
      newFriendName: "",
      newFriendAge: "",
      newFriendEmail: ""
    };
  }

  handleNewFriendInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewFriend = () => {
    console.log(this.state.newFriendName);
    this.props.addFriend(
      this.state.newFriendId,
      this.state.newFriendName,
      this.state.newFriendAge,
      this.state.newFriendEmail
    );
  };

  render() {
    return (
      <div>
        <input
          name="newFriendName"
          type="text"
          placeholder="Name..."
          value={this.state.newFriendName}
          onChange={this.handleNewFriendInput}
        />
        <input
          name="newFriendAge"
          type="text"
          placeholder="Age..."
          value={this.state.newFriendAge}
          onChange={this.handleNewFriendInput}
        />
        <input
          name="newFriendEmail"
          type="text"
          placeholder="Email..."
          value={this.state.newFriendEmail}
          onChange={this.handleNewFriendInput}
        />
        <button onClick={() => this.handleAddNewFriend()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // friends: state.friendsReducer.friends,
    posting: state.friendsReducer.posting
  };
};

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);
