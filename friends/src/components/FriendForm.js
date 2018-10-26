import React, { Component } from "react";

import { connect } from "react-redux";
import {addFriend} from '../actions'
import Form from './Form'


class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    const key = e.target.name;
    this.setState({[key]:e.target.value});
  };

  submitHandler = e => {
      e.preventDefault()
      let friendObj = {...this.state}
      this.props.addFriend(friendObj)
      this.setState({
        name: "",
        email: "",
        age: ""
      })
  }

  render() {
    return (
<Form state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}></Form>
    );
  }
}

export default connect(null, {addFriend})(FriendForm);
