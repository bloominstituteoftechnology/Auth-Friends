import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { FriendList }from '../components';

import { fetchFriends, addFriend, deleteFriend } from '../actions';



class FriendListView extends React.Component {


  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetchingFriends) {
      return (
        <div className='loading'>
        <h1>Collecting your imaginary friends...</h1>
        <ReactLoading type='spokes' color='#c4c4c4' height='30%' width='30%' />
        </div>
      )
    }
    return (
      <div className='friends-view-container'>
      <h1>Look, ma! Friends!</h1>
      <Link to='/add'>
        <button className='add-button'>Add Friend</button>
        </Link>

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
