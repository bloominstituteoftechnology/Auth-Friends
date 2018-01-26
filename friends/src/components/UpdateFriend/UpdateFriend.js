import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, updateFriend } from '../../actions';

class UpdateFriend extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    email: '',
    updatingFriend: false,
    updatedFriend: false,
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    const { id, name, age, email } = this.state;
    this.setState({
      id: '',
      name: '',
      age: '',
      email: '',
    })
    this.props.updateFriend({id, name, age, email });
  }

  render() {
    return (
      <form onSubmit={() => this.inputSubmitHandler}>
        <input onChange={this.inputChangeHandler} placeholder='ID' name='id' value={ this.state.id }></input>
        <input onChange={this.inputChangeHandler} placeholder='Name' name='name' value={ this.state.name }></input>
        <input onChange={this.inputChangeHandler} placeholder='Age' name='age' value={ this.state.age }></input>
        <input onChange={this.inputChangeHandler} placeholder='Email' name='email' value={ this.state.email }></input>
        <button>Change</button>
      </form>
    );
  };
};

const mapStateToProps = state => {
  return {
    error: state.error,
    updatingFriend: state.updatingFriend,
  }
};

export default connect(mapStateToProps, { getFriends, updateFriend })(UpdateFriend);