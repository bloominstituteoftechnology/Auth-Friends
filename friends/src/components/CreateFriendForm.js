import React, { Component } from "react";
import { saveFriend, fetchFriends } from "../actions/index";
import { connect } from "react-redux";

class CreateFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addFriend = event => {
    event.preventDefault();
    this.props.saveFriend(this.state);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
    setTimeout(() => {
      this.props.fetchFriends();
    }, 20);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addFriend}>
          <input onChange={this.handleInput} type="text" name="name" value={this.state.name} />
          <input onChange={this.handleInput} type="text" name="age" value={this.state.age} />
          <input onChange={this.handleInput} type="text" name="email"  value={this.state.email} />
          <button type="submit">Add or Update Friend</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { saveFriend, fetchFriends })(CreateFriendForm);
