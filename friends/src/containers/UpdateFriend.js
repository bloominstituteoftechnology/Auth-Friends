import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFriend } from '../actions';

class UpdateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  componentDidMount() {
    const { friends, match } = this.props;
    const friend = friends.find(friend => `${friend.id}` === match.params.id);
    this.setState(friend);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.state);
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <form className="add-friend" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
          required
        />
        <input
          name="age"
          type="number"
          value={age}
          placeholder="Age"
          onChange={this.handleChange}
          required
        />
        <input
          name="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Update Friend</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({ friends: state.friends });

export default connect(
  mapStateToProps,
  { updateFriend }
)(UpdateFriend);
