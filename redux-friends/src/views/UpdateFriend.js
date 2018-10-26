import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

class UpdateFriend extends Component {
  state = {
    // friend: {
    //   name: this.props.friends[this.props.match.params.id].name,
    //   age: this.props.friends[this.props.match.params.id].age,
    //   email: this.props.friends[this.props.match.params.id].email
    // }
  };
  handleFormSubmit = id => {
    this.props.UpdateFriend(id);
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <Form
          friend={this.state.friend}
          title="Update Friend"
          btnValue="Update Friend"
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  {}
)(UpdateFriend);
