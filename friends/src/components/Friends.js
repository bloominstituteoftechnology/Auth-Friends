import React from 'react';

import Friend from './Friend';

import '../styles/Friends.css';

export default function Friends(props) {
  const editFriendHandler = (friend, index) => {
    props.editFriend(friend, index);
  };

  const deleteFriendHandler = index => {
    props.deleteFriend(index);
  };

  return (
    <div className="Friends">
      {props.friends
        ? props.friends.map((friend, index) => {
            return (
              <div key={friend.email} className="FriendContainer">
                <Friend
                  index={index}
                  friend={friend}
                  editFriendHandler={editFriendHandler}
                  deleteFriendHandler={deleteFriendHandler}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
