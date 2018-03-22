import React, { Component } from "react";
import { saveFriend } from "../actions/index";
import { connect } from "react-redux";

class CreateFriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFriend = event => {
    event.preventDefaults();
    this.props.createFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addFriend}>
          <input onChange={this.handleInput} type="text" value={this.state.name} />
          <input onChange={this.handleInput} type="text" value={this.state.age} />
          <input onChange={this.handleInput} type="text" value={this.state.email} />
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

export default connect(mapStateToProps, { saveFriend })(CreateFriendForm);
