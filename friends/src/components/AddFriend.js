import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import getFriends from '../actions/getFriends';

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-container">
        <form>
          <h4>Add A Friend!</h4>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <button className="add-btn" onClick={e => this.onSubmit(e)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    friends: state.friends,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, {})(AddFriend);
