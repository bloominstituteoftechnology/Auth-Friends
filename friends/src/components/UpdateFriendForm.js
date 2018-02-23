import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../actions';

class UpdateFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    save: false
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const update = {
      index: this.props.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
    }
    let active = this.state.save;
    this.props.updateFriend(update);
    this.setState({save: !active});

    console.log(update);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render () {
    return (
      <form style={this.state.save ? {display: 'none'} : null}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onchange={this.handleInput}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <button type="submit" onClick={this.handleSubmit}>Update Friend</button>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    error: state.friendsReducer.error
  }
};

export default connect(mapStateToProps, { updateFriend })(UpdateFriendForm);