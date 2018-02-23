import React, { Component } from 'react';
import { createFriend } from '../actions/actions';
import { connect } from 'react-redux';
import { rootReducer } from '../reducers/reducers';

class CreateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitFriend = e => {
    e.preventDefault();
    this.props.createFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    return (
      <div className="col-one-half friend-form">
        <form onSubmit={this.submitFriend}>
          <input onChange={this.handleInput} type="text" name="name" placeholder="name"/>
          <input onChange={this.handleInput} type="number" name="age" placeholder="age"/>
          <input onChange={this.handleInput} type="email" name="email" placeholder="email"/>
          <button type="submit">Add/Update Friend</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends,
    error: state.error,
  }
};

export default connect(mapStateToProps, { createFriend })(
  CreateFriendForm
);
