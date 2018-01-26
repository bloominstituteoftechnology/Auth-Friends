import React from 'react';

import Friend from './Friend';

import '../styles/Friends.css';

export default function Friends(props) {
  // const friendClickedHandler = email => {
  //   props.friendClicked(email);
  // };

  const editFriendHandler = (friend, index) => {
    props.editFriend(friend, index);
  };

  const deleteFriendHandler = index => {
    props.deleteFriend(index);
  };

  // editName={this.state.addFriend.name}
  // editAge={this.state.addFriend.age}
  // editEmail={this.state.addFriend.email}
  // editFriendButtonClicked={this.editFriendButtonClicked}
  // handleEditFriendInput={this.handleAddFriendInput}
  // editFriend={this.editFriend}
  // <EditFriend />
  /*
                     <button
                      className="CloseDetailedInfoButton"
                      onClick={() => friendClickedHandler(friend.email)}
                    >
                      close
                    </button>


                <div className="FriendDetailed">
                  <div className="ButtonsHeader">
                    <button
                      className="DeleteFriendButton"
                      onClick={() => deleteFriendHandler(index)}
                    >
                      &#x2717;
                    </button>
                  </div>

                  <div className="FriendsInfoList">
                    <button
                      className="EditFriendButton"
                      onClick={
                        props.editingFriendEmail
                          ? null
                          : () => editFriendHandler(friend.email, index)
                      }
                      style={
                        props.editingFriendEmail
                          ? { opacity: 0.2 }
                          : { opacity: 1.0 }
                      }
                    >
                      edit
                    </button>

                    <li className="Friend__listItem">
                      <h2 className="Friend__listItem--name">{friend.name}</h2>
                    </li>

                    <li className="Friend__listItem">
                      <div className="Friend__listItem--email">
                        {friend.email}
                      </div>
                    </li>

                    <li className="Friend__listItem">{friend.age} years old</li>
                  </div>

                  <div className="FriendsDetailedHeader" />
                </div>

                    */
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
