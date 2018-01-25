import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getFriends, createFriend } from '../../actions';

class FriendInput extends Component {
  state = {
    name: null,
    age: null,
    email: null,
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    this.props.createFriend({name, age, email });
  }

  render() {
    return (
      <form onSubmit={this.inputSubmitHandler}>
        <input onChange={this.inputChangeHandler} placeholder='Name' name='name'></input>
        <input onChange={this.inputChangeHandler} placeholder='Age' name='age'></input>
        <input onChange={this.inputChangeHandler} placeholder='Email' name='email'></input>
        <button>Submit</button>
      </form>
    );
  };
};

const mapStateToProps = state => {
  return {
    error: state.error,
    addingFriend: state.addingFriend,
  }
};

export default connect(mapStateToProps, { getFriends, createFriend })(FriendInput);