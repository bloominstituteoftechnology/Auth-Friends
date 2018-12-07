import React, { Component } from "react";
import { connect } from 'react-redux';
import { addFriend } from '../Store/Actions';

class CreateFriendForm extends Component {
  /*
    we need a few things:
    name
    age
    email
    and some sort of button!
  */

  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState(
      (this.state = {
        name: "",
        age: "",
        email: ""
      })
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Please add name"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Please add age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Please put in a email"
          />
          <button>Please Submit</button>
        </form>
      </div>
    );
  };

}


export default connect(
    null, { addFriend })(CreateFriendForm);