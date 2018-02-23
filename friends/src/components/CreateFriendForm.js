import React, { Component } from 'react';
import { createFriend, updateFriend, deleteFriend } from '../actions/actions';
import { connect } from 'react-redux';

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
    e.preventDefaults();
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
      <div>
        <form onSubmit="">
          <input onChange={this.handleInput} type="text" name="name" placeholder="name"/>
          <input onChange={this.handleInput} type="number" name="age" placeholder="age"/>
          <input onChange={this.handleInput} type="email" name="email" placeholder="email"/>
          <button />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    deletingFriend: state.deletingFriend,
    error: state.error,
  };
};

export default connect(mapStateToProps, { createFriend, updateFriend, deleteFriend })(
  CreateFriendForm
);
