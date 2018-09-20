import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend, updateFriend } from './actions'
import Friends from './components/Friends';
import FriendForm from './components/CreateFriendForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false,
      upDatingFriend: {}
    }
  }

  componentDidMount() {
    this.props.getFriends()
  }

  handleUpdate = event => {
    this.setState({
      isUpdate: true,
      upDatingFriend: this.props.friends.filter(friend => friend.id === event.target.id)[0]
    })
  }

  updateSubmit = friend => {
    this.setState({
      isUpdate: false,
      upDatingFriend: {}
    })

    this.props.updateFriend(friend)
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, friends!</h1>
        <Friends {...this.props} onUpdate={this.handleUpdate} />
        <FriendForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProsp = (state) => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
  }
}

export default connect(mapStateToProsp, {
  getFriends,
  addFriend,
  deleteFriend,
  updateFriend
})(App);