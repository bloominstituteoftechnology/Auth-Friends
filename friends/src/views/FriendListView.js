import React from 'react';
import { connect } from 'react-redux';
import { FriendList, Form }from '../components';
import { fetchFriends, addFriend, deleteFriend } from '../actions';

class FriendListView extends React.Component {

  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetchingFriends) {
      return (<h1>Collecting your imaginary friends...</h1>)
    }
    return (
      <div className='friends-view-container'>
        <button className='add-button'>Add Friend</button>
        <Form add={this.props.addFriend}/>
        <FriendList friends={this.props.friends} deleteFriend={this.props.deleteFriend}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error,
    deletingFriend: state.friendsReducer.deletingFriend,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend,
    deleteFriend,
  }
)(FriendListView);
