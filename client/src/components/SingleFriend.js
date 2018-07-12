import React from 'react';
import { connect } from 'react-redux';

import { fetchSingleFriend, updateFriend } from '../actions';

class SingleFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
  componentDidMount() {
    this.props.fetchSingleFriend(this.props.match.params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name ? this.state.name : this.props.friends.friend.name,
      age: this.state.age ? this.state.age : this.props.friends.friend.age,
      email: this.state.email
        ? this.state.email
        : this.props.friends.friend.email
    };
    this.props.updateFriend(this.props.match.params.id, friend);
    this.props.history.push('/');
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state);
    const { friend } = this.props.friends;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder={friend.name}
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder={friend.age}
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          placeholder={friend.email}
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button>Update</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { fetchSingleFriend, updateFriend }
)(SingleFriend);
