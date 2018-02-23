import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../actions';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  formInputUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFriend = _ => {
    const { name, age, email } = this.state;
    this.props.createFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <form>
        <input value={this.state.name} name="name" type="text" placeholder="Name" onChange={this.formInputUpdate}/>
        <input value={this.state.age} name="age" type="text" placeholder="Age" onChange={this.formInputUpdate}/>
        <input value={this.state.email} name="email" type="text" placeholder="Email" onChange={this.formInputUpdate}/>
        <button onClick={() => this.addFriend()} type="button">Add Friend</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingFriend: state.creatingFriend
  };
};

export default connect(mapStateToProps, { createFriend })(FriendForm);