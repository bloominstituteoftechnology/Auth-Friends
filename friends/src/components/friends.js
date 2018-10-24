import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchData,
  updateFriend,
  addFriend,
  databaseUpdateFriend
} from '../actions';
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friend: '',
      age: '',
      email: '',
      singleFriendFriend: '',
      singleFriendAge: '',
      singleFriendEmail: ''
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }
  componentWillReceiveProps(newProps) {
    if (this.props.singleFriend !== newProps.singleFriend) {
      this.setState({
        singleFriendFriend: newProps.singleFriend.name,
        singleFriendAge: newProps.singleFriend.age,
        singleFriendEmail: newProps.singleFriend.email
      });
    } else {
      return this.props.singleFriend;
    }
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
    this.setState({
      ...this.state,
      friend: '',
      age: '',
      email: ''
    });
  };

  singleFriendUpdate = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateSingleFriend = (event, id) => {
    const updatedFriend = {
      name: this.state.singleFriendFriend,
      age: this.state.singleFriendAge,
      email: this.state.singleFriendEmail
    };
    this.setState({
      singleFriendFriend: '',
      singleFriendAge: '',
      singleFriendEmail: ''
    });
    this.props.databaseUpdateFriend(updatedFriend, id);
  };

  render() {
    return (
      <div>
        <h1> Lambda Friends</h1>
        <FriendsList
          friends={this.props.friends}
          singleFriend={this.props.singleFriend}
          updateFriend={this.props.updateFriend}
          singleFriendUpdate={this.singleFriendUpdate}
          updateSingleFriend={this.updateSingleFriend}
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
    addFriend: friend => dispatch(addFriend(friend)),
    databaseUpdateFriend: (friend, id) =>
      dispatch(databaseUpdateFriend(friend, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
