import React, {Component} from "react";
import { connect } from 'react-redux';

import { createFriend } from '../actions';

class CreateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name ]: event.target.value })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createFriend(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder=" Name" />
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder=" Age" />
        <input type="text" name="email" value={this.state.email} onChange={this.inputHandler} placeholder=" Email" />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { createFriend: createFriend })(CreateFriendForm);