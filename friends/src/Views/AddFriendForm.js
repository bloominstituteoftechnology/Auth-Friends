import React, { Component } from "react";
import { addFriend } from "../actions";
import { connect } from "react-redux";

class AddFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addFriendFunc = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <div>
        <div className="add-friend-form-container">
          <form className="add-friend-form" onSubmit={this.addFriendFunc}>
            <div className="input-container">
              <input onChange={this.changeHandler} name="name" type="input" placeholder="name" />
              <input onChange={this.changeHandler} name="age" type="input" placeholder="age" />
              <input onChange={this.changeHandler} name="email" type="input" placeholder="email" />
            </div>
            <button type="submit">Add New Friend</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addFriend }
)(AddFriendForm);
