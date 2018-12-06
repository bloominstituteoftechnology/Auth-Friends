import React from "react";
import { connect } from "react-redux";
import { updateFriend } from "../actions";

class UpdateFriend extends React.Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriendInfo = e => {
    e.preventDefault();
    this.props.updateFriend(this.state, this.props.friend.id);
    this.setState({ name: "", age: "", email: "" });
    this.props.pick({});
  };

  render() {
    const { friend } = this.props;
    return (
      <form onSubmit={this.updateFriendInfo}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={friend.name}
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder={friend.age}
        />
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder={friend.email}
        />
        <button type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    error: friendsReducer.error,
    updating: friendsReducer.updatingFriend
  };
};

export default connect(
  mapStateToProps,
  {
    updateFriend
  }
)(UpdateFriend);
