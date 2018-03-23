import React, { Component } from 'react';
import { connect } from 'react-redux';
import addFriendAction from '../actions/addFriendAction';
import addFriendReducer from '../reducers/addFriendReducer';

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
    this.props.addFriendAction(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
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

const mapStateToProps = store => {
  return {
    fetched: store.fetched,
    friends: store.friendsReducer.friends,
    error: store.errorMessage
  };
};

const actions = {
  addFriendAction
};

export default connect(mapStateToProps, actions)(AddFriend);
