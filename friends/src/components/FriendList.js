import React from 'react';
import { connect } from 'react-redux';
import { fetchFriend } from '../actions';

const FriendList = props => {
  return(
    <div>
      {props.isFetching ? (
        <h1>Loading Friends...</h1>
      ) : (
        <ul>
          {props.friends.map(friend => {
            return <li
                      key={friend.id}
                      onClick={()=>props.fetchFriend(friend.id)}
                    >
                      {friend.name}
                    </li>
          })}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetchingFriends
  }
}

export default connect(mapStateToProps, { fetchFriend })(FriendList);
