import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewFriend } from '../actions';
import Form from '../components/Form';

class AddFriend extends Component {
  handleFormSubmit = friend => {
    this.props.addNewFriend(friend);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Form
          title="Add friend"
          btnValue="Add Friend"
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addNewFriend }
)(AddFriend);
