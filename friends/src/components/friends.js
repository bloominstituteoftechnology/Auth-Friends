import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, updateFriend, addFriend } from '../actions';
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friend: '',
      age: '',
      email: ''
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }

  handleNewFriend = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  updateDatabase = e => {
    e.preventDefault();
    if (
      this.state.friend.length > 0 &&
      this.state.age.length > 0 &&
      this.state.email.length > 0
    ) {
      this.props.addFriend({
        name: this.state.friend,
        age: this.state.age,
        email: this.state.email
      });
    } else {
      alert('cant have a empty field');
    }
  };

  render() {
    return (
      <div>
        <h1> Lambda Friends</h1>
        <FriendsList
          friends={this.props.friends}
          singleFriend={this.props.singleFriend}
          updateFriend={this.props.updateFriend}
        />
        <AddFriend
          handleNewFriend={this.handleNewFriend}
          updateDatabase={this.updateDatabase}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    err: state.friendsReducer.err,
    fetching: state.friendsReducer.fetching,
    singleFriend: state.singleFriendReducer.friend,
    updateBool: state.singleFriendReducer.updateFriend
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    updateFriend: friend => dispatch(updateFriend(friend)),
    addFriend: friend => dispatch(addFriend(friend))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
