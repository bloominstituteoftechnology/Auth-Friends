import React, { Component } from "react";
import { connect } from "react-redux";
import { newFriends } from "../actions/";

class NewFriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitFriend = event => {
    event.preventDefault();
    this.props.newFriends({
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
      <div>
        <ul>
          <li key="listKey" className="friend">
            <form onSubmit={this.submitFriend}>
              <div>
                Name:
                <input
                  name="name"
                  type="text"
                  onChange={this.handleInput}
                  placeholder="Name"
                />
              </div>
              <div>
                Age:
                <input
                  name="age"
                  type="number"
                  onChange={this.handleInput}
                  placeholder="Age"
                />
              </div>
              <div>
                Email:
                <input
                  name="email"
                  type="email"
                  onChange={this.handleInput}
                  placeholder="Email"
                />
              </div>
              <button type="submit">Add A Friend</button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { newFriends })(NewFriendForm);
