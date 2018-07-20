import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFriend }  from '../actions';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFriend = _ => {
    const { name, age, email } = this.state;
    this.props.saveFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddFriend()} type="button">
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    savingFriend: state.saveFriend
  };
};

export default connect(mapStateToProps, { saveFriend })(FriendForm);
